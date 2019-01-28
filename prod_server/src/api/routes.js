const express = require('express');
const path = require('path');

const router = express.Router();

/**
 * GET /status
 */
router.get('/status', (req, res) => res.send('OK'));

/* GET geme main page. */
router.get('/game/', function(req, res) {    
    res.sendFile(path.join(__dirname + '../../../build/index.html'));
});

/* 404 handler */
router.get('*', function(req, res){   
    res.sendFile(path.join(__dirname + '../template/404.html'));
});

module.exports = router;