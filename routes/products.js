const express = require('express');
const ProductService = require('../services/products');

function productsApi(app) {
    const router = express.Router();
    app.use('/api/products', router);

    const productService = new ProductService();

    router.get('/', async function (req, res, next) {
        const { tags } = req.query;
        try {
            const products = await productService.getProducts({ tags })
            res.status(200).json(products)
        } catch (error) {
            next(error)
        }
    });
    router.get('/:productId', async function (req, res, next) {
        const { productId } = req.params;
        try {
            const products = await productService.getProduct({ productId })
            res.status(200).json(products)
        } catch (error) {
            next(error)
        }
    });
    router.post('/', async function (req, res, next) {
        const { body: product } = req;   //{body : product} quiere decir que a body se le esta asignando un alias 
        try {
            const createdProductId = await productService.createProduct({ product })
            res.status(201).json(createdProductId)
        } catch (error) {
            next(error)
        }
    });
    router.put('/:productId', async function (req, res, next) {
        const { productId } = req.params;
        const { body: product } = req;
        try {
            const updatedProductId = await productService.updateProduct({ productId , product })
            res.status(200).json(updatedProductId)
        } catch (error) {
            next(error)
        }
    });
    router.delete('/:productId', async function (req, res, next) {
        const { productId } = req.params;
        try {
            const deletedProductId = await productService.deleteProduct({ productId })
            res.status(200).json(deletedProductId)
        } catch (error) {
            next(error)
        }
    });
}

module.exports = productsApi;