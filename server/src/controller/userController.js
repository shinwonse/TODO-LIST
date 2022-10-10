exports.logout = (req, res) => {
  req.session.destroy((err) => {
    res.clearCookie("auth");
    if (err) return err;
    res.end();
  });
};
