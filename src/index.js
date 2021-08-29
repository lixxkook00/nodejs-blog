const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3004;

const route = require('./routes/index');

// Static File
app.use(express.static(path.join(__dirname, 'public')));

// "MiddleWare" For POST get body"
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Morgan
// app.use(morgan('combined'))

// HandleBars
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set(
    'view engine',

    'hbs',
);
app.set('views', path.join(__dirname, 'resources/views'));

// Route Init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
