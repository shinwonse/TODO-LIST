exports.logout = (req, res) => {
  console.log(req.session);
  res.clearCookie('login');
  req.session.destroy((err) => {
    if (err) return err;
    res.end();
  });
};
