const express = require('express');
const { productsMock } = require('../utils/mocks/products.js');

function productsApi(app) {
    const router = express.Router();
    app.use('/api/products', router);

    router.get('/', async function (req, res, next) {
        try {
            const products = await Promise.resolve(productsMock)
            res.status(200).json({ data: products, message: 'products listed' })
        } catch (error) {
            next(error)
        }
    });
    router.get('/:productId', async function (req, res, next) {
        try {
            const products = await Promise.resolve(productsMock[0])
            res.status(200).json({ data: products, message: 'products retrieved' })
        } catch (error) {
            next(error)
        }
    });
    router.post('/', async function (req, res, next) {
        try {
            const createdProductId = await Promise.resolve(productsMock[0].id)
            res.status(201).json({ data: createdProductId, message: 'product created' })
        } catch (error) {
            next(error)
        }
    });
    router.put('/:productId', async function (req, res, next) {
        try {
            const updatedProductId = await Promise.resolve(productsMock[0].id)
            res.status(200).json({ data: updatedProductId, message: 'product updated' })
        } catch (error) {
            next(error)
        }
    });
    router.delete('/:productId', async function (req, res, next) {
        try {
            const deletedProductId = await Promise.resolve(productsMock[0].id)
            res.status(200).json({ data: deletedProductId, message: 'product deleted' })
        } catch (error) {
            next(error)
        }
    });
}

module.exports = productsApi;