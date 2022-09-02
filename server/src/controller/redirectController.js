exports.redirectHome = (req, res) => {
  const data = req.session.loggedUser;
  const string = encodeURIComponent(data.login);
  res.redirect('http://localhost:8080/home?login=' + string);
};
