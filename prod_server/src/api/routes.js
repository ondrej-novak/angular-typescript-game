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
module.exports = router;