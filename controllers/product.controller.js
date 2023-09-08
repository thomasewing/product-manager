const Product = require('../models/product.model');
module.exports.index = (request, response)=>{
    response.json({
        message:"Greetings, esteemed existential terrestrial kin."
    });
}

module.exports.createProduct = (request, response)=>{
    Product.create(request.body)
        .then(product=>response.json(product))
        .catch(err=>response.json(err));
}