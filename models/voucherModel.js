// models/voucherModel.js
const db = require('../config/db');

const Voucher = {
    getAllVouchers: (callback) => {
        db.query('SELECT * FROM vouchers', callback);
    },
    getVoucherByid: (id, callback) => {
        db.query('SELECT * FROM vouchers WHERE id = ?', [id], callback);
    },
    createVoucher: (voucherData, callback) => {
        const { id, discount, expiration_date } = voucherData;
        db.query(
            'INSERT INTO vouchers (id, discount, expiration_date) VALUES (?, ?, ?)',
            [id, discount, expiration_date],
            callback
        );
    },
    updateVoucher: (id, voucherData, callback) => {
        const { discount, expiration_date } = voucherData;
        db.query(
            'UPDATE vouchers SET discount = ?, expiration_date = ? WHERE id = ?',
            [discount, expiration_date, id],
            callback
        );
    },
    deleteVoucher: (id, callback) => {
        db.query('DELETE FROM vouchers WHERE id = ?', [id], callback);
    }
};

module.exports = Voucher;
