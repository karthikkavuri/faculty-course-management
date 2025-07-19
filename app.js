
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/faculty', require('./routes/faculty'));
app.use('/courses', require('./routes/courses'));

app.get('/', (req, res) => {
  res.send('College API is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
