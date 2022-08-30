const express = require('express');
const router = express.Router();
const Notice = require('../controller/noticeController');

// Create Notice
router.post('/api/newNotice', Notice.createNotice);

// Delete Notice
router.delete('/api/delete/:noticeID', Notice.deleteNotice);

// Edit Notice
router.put('/api/edit/:noticeID', Notice.editNotice);

router.get('/api/findAll', Notice.findAll);

module.exports = router;
