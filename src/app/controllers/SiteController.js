const { render } = require('node-sass');

class SiteController {
    // [GET] .../news/:slug
    search(req, res) {
        res.render('search');
    }

    // [GET] .../news/
    index(req, res) {
        res.render('home');
    }
}

module.exports = new SiteController();
