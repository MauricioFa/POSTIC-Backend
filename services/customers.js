const MongoLib = require('../lib/mongo.js');

class CustomerService {
  constructor() {
    this.collection = 'customers';
    this.mongoDB = new MongoLib();
  }
  
  async getCustomers({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const customers = await this.mongoDB.getAll(this.collection, query);
    return customers || [];
  }

  async getCustomer({ customerId }) {
    const customer = await this.mongoDB.get(this.collection, customerId);
    return customer || [];
  }

  async createCustomer({ customer }) {
    const createCustomerId = await this.mongoDB.create(this.collection, customer);
    return createCustomerId;
  }

  async updateCustomer({ customerId, customer } = {}) {
    const updatedCustomer = await this.mongoDB.update(
      this.collection,
      customerId,
      customer
    );
    return updatedCustomer;
  }

  async deleteCustomer({ customerId }) {
    const deleteCustomer = await this.mongoDB.delete(this.collection, customerId);
    return deleteCustomer;
  }
}

module.exports = CustomerService;
