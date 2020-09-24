const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/products', productsRoute);
app.use('/order', ordersRoute);

app.use((req, res, next ) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
    
});

app.use((erorr, req, res, next) =>{
    res.status(erorr.status || 500);
    res.json({
        erorr: {
            message: erorr.message
        }
    });
});

module.exports = app;

