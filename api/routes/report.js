var express = require('express');
var router = express.Router();
var report = require('../controllers/Report')

// Routes related to scanning reports

router.get('/',report.index);
router.post('/',validate_add,report.post);
router.get('/:id', report.get);
module.exports = router;
