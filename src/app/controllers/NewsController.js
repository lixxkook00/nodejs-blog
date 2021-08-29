const { render } = require('node-sass');

class NewsController {
    // [GET] .../news/:slug
    show(req, res) {
        res.send('News Page detail !!!');
    }

    // [GET] .../news/
    index(req, res) {
        res.render('news');
    }
}

module.exports = new NewsController();
