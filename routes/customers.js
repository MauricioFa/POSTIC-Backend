const express = require('express');
const CustomersService = require('../services/customers');

function customersApi(app) {
  const customersService = new CustomersService();
  const router = express.Router();
  app.use('/api/customers', router);

  router.get('/', async function(req, res, next) {
    const { tags } = req.query;
    try {
      const customers = await customersService.getCustomers({ tags });
      res.status(200).json(customers);
    } catch (error) {
      next(error);
    }
  });

  router.get('/:customerId', async function(req, res, next) {
    const { customerId } = req.params;
    try {
      const customers = await customersService.getCustomer({ customerId });
      res.status(200).json(customers);
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async function(req, res, next) {
    const { body: customer } = req;
    try {
      const createdCustomerId = await customersService.createCustomer({
        customer,
      });
      res.status(201).json(createdCustomerId);
    } catch (error) {
      next(error);
    }
  });

  router.put('/:customerId', async function(req, res, next) {
    const { customerId } = req.params;
    const { body: customer } = req;
    try {
      const updatedCustomerId = await customersService.updateCustomer({
        customerId,
        customer,
      });
      res.status(200).json(updatedCustomerId);
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:customerId', async function(req, res, next) {
    const { customerId } = req.params;
    try {
      const deletedCustomerId = await customersService.deleteCustomer({
        customerId,
      });
      res.status(200).json(deletedCustomerId);
    } catch (error) {
      next(error);
    }
  });
}

module.exports = customersApi;
