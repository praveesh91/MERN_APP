const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "Get request to /orders"
    })
})

router.post('/', (req, res, next)=>{
    const order = {
        orderId: req.body.orderId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: "Post request to /orders",
        order: order
    })
})

router.get('/:orderId', (req, res, next) =>{
    const id = req.params.orderId;
    if(id === 'special'){
        res.status(200).json({
            message: 'Your path is special Id',
            id: id
        })
    }
    else{
        res.status(200).json({
            message: 'Your path is normal Id',
        })
    }    

})

router.patch('/:orderId', (req, res, next) =>{
    res.status(200).json({
        message: 'You send a patch request',
    })
})

router.delete('/:orderId', (req, res, next) =>{
    res.status(200).json({
        message: 'Your send a delete request',
    })
})

module.exports = router