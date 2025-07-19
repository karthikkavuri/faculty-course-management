
const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const DATA_PATH = './data/courses.json';

router.get('/', async (req, res) => {
  const data = await fs.readFile(DATA_PATH, 'utf-8');
  res.json(JSON.parse(data));
});

router.get('/:id', async (req, res) => {
  const data = JSON.parse(await fs.readFile(DATA_PATH, 'utf-8'));
  const course = data.find(c => c.id === parseInt(req.params.id));
  course ? res.json(course) : res.status(404).json({ message: 'Course not found' });
});

router.post('/', async (req, res) => {
  const data = JSON.parse(await fs.readFile(DATA_PATH, 'utf-8'));
  const newCourse = req.body;
  newCourse.id = data.length ? data[data.length - 1].id + 1 : 1;
  data.push(newCourse);
  await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
  res.status(201).json(newCourse);
});

router.put('/:id', async (req, res) => {
  const data = JSON.parse(await fs.readFile(DATA_PATH, 'utf-8'));
  const index = data.findIndex(c => c.id === parseInt(req.params.id));
  if (index !== -1) {
    data[index] = { ...data[index], ...req.body };
    await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
    res.json(data[index]);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

router.delete('/:id', async (req, res) => {
  let data = JSON.parse(await fs.readFile(DATA_PATH, 'utf-8'));
  const index = data.findIndex(c => c.id === parseInt(req.params.id));
  if (index !== -1) {
    const deleted = data.splice(index, 1);
    await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

module.exports = router;
