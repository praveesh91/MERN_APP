const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const { urlencoded } = require('body-parser');

mongoose.connect(
    'mongodb+srv://node_express:'+ 
    process.env.MONGO_ATLAS_PW + 
    '@nodeexpress.enfxl.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/orders', orderRoutes); 

app.use((req, res, next) =>{
    const error = new Error('Not found');
    // console.log("error = ",error)
    error.status = 404;
    // console.log("error.status = ",error.status)
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;