exports.redirectHome = (req, res) => {
  const data = req.session.loggedUser;
  // 쿼리 스트링 방식이 아니라
  const string = encodeURIComponent(data.nickname);
  res.redirect('http://localhost:8080/home?nickname=' + string);
};

exports.redirectLogin = (req, res) => {
  res.redirect('http://localhost:8080/login');
};
