/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.grayscale = (req, res) => {
		res.render('grayscale', {
					title: 'Landing Page'
				});
};

