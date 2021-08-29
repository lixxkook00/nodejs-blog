const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // News
    app.use('/news', newsRouter);

    // /
    app.use('/', siteRouter);
}

module.exports = route;
