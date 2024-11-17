const db = require('../models');


async function getProductById(productId) {
    try {
        const product = await db.products.findByPk(productId);

        // Kiểm tra xem sản phẩm có được tìm thấy không
        if (!product) {
            throw new Error('Product not found');
        }

        return product;
    } catch (error) {
        console.error('Error fetching product:', error.message); // Log chi tiết lỗi
        throw new Error('Error fetching product: ' + error.message);
    }
}


module.exports = {
    getProductById,
};
