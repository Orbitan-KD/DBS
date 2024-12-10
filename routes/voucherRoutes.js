// routes/voucherRoutes.js
const express = require('express');
const router = express.Router();
const voucherController = require('../controllers/voucherController');

router.get('/:id', voucherController.getVoucherByid);
router.post('/', voucherController.createVoucher);
router.put('/:id', voucherController.updateVoucher);
router.delete('/:id', voucherController.deleteVoucher);
router.get('/', async (req, res) => {
    // Lấy customerId từ query string trong yêu cầu
    const { customerId } = req.query;

    // Kiểm tra nếu không có customerId thì trả về lỗi
    if (!customerId) {
        return res.status(400).json({ message: 'Thiếu customerId trong yêu cầu.' });
    }

    try {
        // Lấy voucher chỉ của khách hàng cụ thể dựa vào customerId
        const vouchers = await voucherController.getVoucherByid({
            where: { customerId }, // Tìm các voucher có customerId giống với giá trị truyền vào
        });

        // Trả về kết quả dưới dạng JSON
        res.json(vouchers);
    } catch (error) {
        // Nếu có lỗi trong quá trình truy vấn database, trả về mã lỗi 500
        console.error('Lỗi lấy danh sách voucher:', error);
        res.status(500).json({ message: 'Lỗi lấy danh sách voucher' });
    }
});

router.get('/', voucherController.getAllVouchers);

module.exports = router;
