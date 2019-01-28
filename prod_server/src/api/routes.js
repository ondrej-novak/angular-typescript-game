const express = require('express');
const router = express.Router();
const path = require('path');

/**
 * GET /status
 */
router.get('/status', (req, res) => res.send('OK'));

/* GET geme main page. */
router.get('/game', function(req, res) {       
    res.sendFile('index.html', { root: path.join(__dirname, '../../dist/') });
});
router.get('/game/*', function(req, res) {       
    res.sendFile('index.html', { root: path.join(__dirname, '../../dist/') });
});

/* 404 handler */
// router.get('*', function(req, res){        
//     res.sendFile('404.html', { root: path.join(__dirname, '../templates/') });
// });

module.exports = router;