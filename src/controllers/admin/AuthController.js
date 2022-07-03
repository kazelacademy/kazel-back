const viewsPrefix = 'public/auth';

exports.getLogin = (_, res) => {
  res.render(`${viewsPrefix}/login`, {
    page: 'Iniciar sesión',
    layout: 'public',
  });
};
