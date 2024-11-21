const getAboutUs = (req, res) => {
    res.render('about-us', { title: 'About Us' });
  };
  module.exports = {
    getAboutUs,
  };