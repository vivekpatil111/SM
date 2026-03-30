const { appendRow } = require('../services/sheets.service');

async function submitSurvey(req, res) {
  try {
    const { timestamp, branch, division, subject, teacher, answers } = req.body;

    if (!branch || !subject || !answers || answers.length !== 10) {
      return res.status(400).json({ error: 'Invalid data — all 10 answers required' });
    }

    const row = [
      timestamp || new Date().toISOString(),
      branch,
      division,
      subject,
      teacher,
      ...answers,
    ];

    await appendRow(row);
    res.json({ success: true, message: 'Response saved!' });

  } catch (err) {
    console.error('Submit error:', err.message);
    res.status(500).json({ error: 'Server error — check logs' });
  }
}

module.exports = { submitSurvey };