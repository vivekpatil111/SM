const express               = require('express');
const router                = express.Router();
const { submitSurvey }      = require('../controllers/survey.controller');

router.post('/submit', submitSurvey);

module.exports = router;