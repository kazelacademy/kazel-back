exports.getHome = (_, res) => {
  res.render('admin/home', {
    page: 'Admin',
  });
};
