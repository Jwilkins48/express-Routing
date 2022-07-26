const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    console.log('middleware for homepage');
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/info', (req, res) => {
    console.log('middleware for info page');
    res.sendFile(path.join(__dirname, '..', 'views', 'info.html'));
});

module.exports = router;