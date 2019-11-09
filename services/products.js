const { productsMock } = require('../utils/mocks/products');

class ProductService {
    async getProducts() {
        const products = await Promise.resolve(productsMock);
        return products || [];
    }

    async getProduct() {
        const product = await Promise.resolve(productsMock[0]);
        return product || [];
    }

    async createProduct(){
        const createProductId = await Promise.resolve(productsMock[0].id);
        return createProductId;
    }

    async updateProduct(){
        const updateProduct = await Promise.resolve(productsMock[0].id);
        return updateProduct;
    }
    
    async deleteProduct(){
        const deleteProduct = await Promise.resolve(productsMock[0].id);
        return deleteProduct;
    }
}

module.exports = ProductService;