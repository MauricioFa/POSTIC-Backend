const MongoLib = require('../lib/mongo.js');

class ProductService {
    constructor() {
        this.collection = 'products';
        this.mongoDB = new MongoLib();
    }
    async getProducts({ tags }) {
        const query = tags && { tags: { $in: tags } }
        const products = await this.mongoDB.getAll(this.collection, query);
        return products || [];
    }

    async getProduct({ productId }) {
        const product = await this.mongoDB.get(this.collection, productId);
        return product || [];
    }

    async createProduct({ product }) {
        const createProductId = await this.mongoDB.create(this.collection, product);
        return createProductId;
    }

    async updateProduct({ productId, product } = {}) {
        const updatedProduct = await this.mongoDB.update(this.collection, productId, product)
        return updatedProduct;
    }


    async deleteProduct({ productId }) {
        const deleteProduct = await this.mongoDB.delete(this.collection, productId);
        return deleteProduct;
    }
}

module.exports = ProductService;