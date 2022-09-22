exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.send('logout');
      res.redirect('http://localhost:8080/login');
    }
  });
};
