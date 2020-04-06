const express = require('express')
const router = express.Router();
const path = require('path')
const mail = require('../server/mail');

router.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

router.post('/api/contact', async (req, res) => {
    await mail.send({
        name: req.body.name,
        subject: 'Hello ✓',
        email: req.body.email,
        message: req.body.message,
        filename: 'mail'
    });

    return res.redirect('/')
});


module.exports = router;
