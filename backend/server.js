require('dotenv').config({ path: '../.env' });
const express      = require('express');
const cors         = require('cors');
const surveyRoutes = require('./src/routes/survey.routes');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', surveyRoutes);

app.get('/', (req, res) => {
  res.json({ status: 'LecturePulse backend running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});