const express = require('express');
const OrdersService = require('../services/orders');

function ordersApi(app) {
  const ordersService = new OrdersService();
  const router = express.Router();
  app.use('/api/orders', router);

  router.get('/', async function(req, res, next) {
    const { tags } = req.query;
    try {
      const orders = await ordersService.getOrders({ tags });
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  });

  router.get('/:orderId', async function(req, res, next) {
    const { orderId } = req.params;
    try {
      const order = await ordersService.getOrder({ orderId });
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async function(req, res, next) {
    const { body: order } = req;
    try {
      const createdOrderId = await ordersService.createOrder({ order });
      res.status(201).json(createdOrderId);
    } catch (error) {
      next(error);
    }
  });

  router.put('/:orderId', async function(req, res, next) {
    const { orderId } = req.params;
    const { body: order } = req;
    try {
      const updatedOrderId = await ordersService.updateOrder({
        orderId,
        order,
      });
      res.status(200).json(updatedOrderId);
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:orderId', async function(req, res, next) {
    const { orderId } = req.params;
    try {
      const deletedOrderId = await ordersService.deleteOrder({
        orderId,
      });
      res.status(200).json(deletedOrderId);
    } catch (error) {
      next(error);
    }
  });
}

module.exports = ordersApi;
