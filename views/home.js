const ejs = require('ejs');
const path = require('path');

module.exports = function (req, res, next, productHomeStr) {
    return new Promise((resolve, reject) => {
        ejs.renderFile(path.join(__dirname, '../views/home.ejs'), { productHomeContent: productHomeStr }, function (err, str) {
            if (err) return reject(err);  // Trả lỗi nếu có
            resolve(str);  // Trả về kết quả render
        });
    });
};
