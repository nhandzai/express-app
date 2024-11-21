
const getContactUs = (req, res) => {
    res.render('contact-us', { title: 'Contact Us' });
  };
    module.exports = {
        getContactUs,
    };