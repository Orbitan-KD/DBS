// controllers/voucherController.js
const Voucher = require('../models/voucherModel');

exports.getAllVouchers = (req, res) => {
    Voucher.getAllVouchers((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.getVoucherByid = (req, res) => {
    const { id } = req.params;
    Voucher.getVoucherByid(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Voucher not found' });
        res.json(results[0]);
    });
};

exports.createVoucher = (req, res) => {
    const voucherData = req.body;
    Voucher.createVoucher(voucherData, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Voucher created' });
    });
};

exports.updateVoucher = (req, res) => {
    const { id } = req.params;
    const voucherData = req.body;
    Voucher.updateVoucher(id, voucherData, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Voucher updated' });
    });
};

exports.deleteVoucher = (req, res) => {
    const { id } = req.params;
    Voucher.deleteVoucher(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Voucher deleted' });
    });
};
