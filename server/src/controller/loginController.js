const { User } = require('../models/user');
const axios = require('axios').default;
require('dotenv').config();

exports.githubLoginPage = (req, res) => {
  const baseUrl = 'https://github.com/login/oauth/authorize';
  const config = {
    client_id: process.env.GH_ID,
    scope: 'user',
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;

  res.redirect(finalUrl);
};

exports.githubLoginWithServer = async (req, res) => {
  const { code } = req.query;
  const baseUrl = 'https://github.com/login/oauth/access_token';
  const body = {
    client_id: process.env.GH_ID,
    client_secret: process.env.GH_SECRET,
    code,
  };
  try {
    const { data: requestToken } = await axios.post(baseUrl, body, {
      headers: { Accept: 'application/json' },
    });
    const { access_token } = requestToken;

    const apiUrl = 'https://api.github.com';
    const { data: userdata } = await axios.get(`${apiUrl}/user`, {
      headers: { Authorization: `token ${access_token}` },
    });
    // res.send(userdata);
    return res.send(userdata).status(201).redirect('http://localhost:8080');
  } catch (err) {
    console.error(err);
    return res.redirect(
      500,
      '/?loginError=서버 에러로 인해 로그인에 실패하였습니다. 잠시 후에 다시 시도해 주세요'
    );
  }
};
