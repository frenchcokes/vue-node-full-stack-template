import express from 'express';

const router = express();

const PORT = 3000;

router.get('/', (req, res) => {
  res.send('Successful response.');
});

router.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
