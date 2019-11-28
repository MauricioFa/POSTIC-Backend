const MongoLib = require('../lib/mongo.js');

class ordersService {
  constructor() {
    this.collection = 'orders';
    this.mongoDB = new MongoLib();
  }

  async getOrders({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const orders = await this.mongoDB.getAll(this.collection, query);
    return orders || [];
  }

  async getOrder({ orderId }) {
    const order = await this.mongoDB.get(this.collection, orderId);
    return order || [];
  }

  async createOrder({ order }) {
    const createOrderId = await this.mongoDB.create(this.collection, order);
    return createOrderId;
  }

  async updateOrder({ orderId, order } = {}) {
    const updatedOrder = await this.mongoDB.update(
      this.collection,
      orderId,
      order
    );
    return updatedOrder;
  }

  async deleteOrder({ orderId }) {
    const deleteOrder = await this.mongoDB.delete(this.collection, orderId);
    return deleteOrder;
  }
}

module.exports = ordersService;
