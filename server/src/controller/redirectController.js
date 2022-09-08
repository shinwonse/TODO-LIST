exports.redirectHome = (req, res) => {
  const data = req.session.loggedUser;
  const string = encodeURIComponent(data.nickname);
  res.redirect('http://localhost:8080/home?nickname=' + string);
};
