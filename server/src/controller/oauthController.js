const { User } = require('../models/user');
const fetch = require('node-fetch');
require('dotenv').config();

exports.getAuthCode = (req, res) => {
  const baseUrl = 'https://github.com/login/oauth/authorize';
  const config = {
    client_id: '0f30859812c2b1822b6f',
    scope: 'user',
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;

  res.redirect(finalUrl);
};

exports.postToken = async (req, res) => {
  const { code } = req.query;
  const baseUrl = 'https://github.com/login/oauth/access_token';
  const config = {
    client_id: process.env.GH_ID,
    client_secret: process.env.GH_SECRET,
    code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  const tokenRequest = await (
    await fetch(finalUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    })
  ).json();
  /* 여기까지 액세스 토큰 얻었고
   *  이제 유저 정보를 요청함
   *  */
  const apiUrl = 'https://api.github.com';
  const { access_token } = tokenRequest;
  const userData = await (
    await fetch(`${apiUrl}/user`, {
      headers: {
        Authorization: `token ${access_token}`,
      },
    })
  ).json();
  /*
   * 여기까지 userData 를 받아왔고, 이제 그 데이터에서 필요한 것만 골라서 DB에 넣어야 함
   *이때 userData 의 한 항목을 key 값으로 등록해서 같은 key 값이 있을 경우 저장된 데이터를 사용하고
   *같은 key 값이 없을 경우 새로운 유저를 DB에 저장함
   *userData json 에 있는 login 값을 key 값으로 이용하고자 함
   * */
  const existingUser = await User.findOne({ login: userData.login });
  if (!existingUser) {
    const user = await User.create({
      nickname: userData.login,
    });
    req.session.loggedIn = true;
    req.session.loggedUser = user;
    return res.redirect('/oauth/redirect');
  }
  req.session.loggedIn = true;
  req.session.loggedUser = existingUser;
  return res.redirect('/oauth/redirect');
};

exports.redirect = (req, res) => {
  const data = req.session.loggedUser;
  // 쿼리 스트링 방식이 아니라
  const string = encodeURIComponent(data.nickname);
  res.redirect('http://localhost:8080/home?nickname=' + string);
};
