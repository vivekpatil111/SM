require('dotenv').config(); // ❗ fix 1

const express      = require('express');
const cors         = require('cors');
const surveyRoutes = require('./src/routes/survey.routes');

const app  = express();
const PORT = process.env.PORT || 10000; // ❗ fix 2

app.use(cors());
app.use(express.json());
app.use('/api', surveyRoutes);

app.get('/', (req, res) => {
  res.json({ status: 'LecturePulse backend running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // ❗ fix 3
});
