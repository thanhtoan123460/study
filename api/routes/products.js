const express = require('express');
const route = express();


route.get('/',(req, res, next ) =>{
    res.status(200).json({
        message:'Day len de lay du lieu tu data'
    });
});

route.post('/',(req, res, next ) =>{
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(200).json({
        message:'Day len de lay du lieu tu data',
        createProduct: product
    });
});

route.get('/:productsId',(req, res, next) =>{
    const id = req.params.productId;
    if(id ==='special'){
        res.status(200).json({
            message:'You discovered special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message:'You passed an ID',
     
        });
    }
});

route.patch('/:productsId',(req, res, next) =>{
   res.status(200).json({
        message:'upload thanh cong'
   });
});

route.delete('/:productsId',(req, res, next) =>{
    res.status(200).json({
         message:'xoa  thanh cong'
    });
 });

module.exports = route;