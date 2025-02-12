import { Router } from 'express';
import { db2 } from '../database/db';

const router = Router();

router.post('/book', async (req, res) => {
  try {
    await db2('books').insert({
      title: req.body.title,
      author: req.body.author,
      date_published: req.body.date_published,
    });
    res.status(200).send({ message: 'Book added successfully.' });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error.' });
  }
});

router.get('/book', async (req, res) => {
  try {
    const data = await db2('books')
      .select('*')
      .then(books => {
        res.status(200).send(books);
      });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: 'Internal server error.' });
  }
});

router.delete('/book/:id', async (req, res) => {
  try {
    await db2('books').delete().where('id', req.params.id);
    res.status(200).send({ message: 'Book deleted successfully.' });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error.' });
  }
});

router.patch('/book/:id', async (req, res) => {
  try {
    await db2('books')
      .update({
        title: req.body.title,
        author: req.body.author,
        date_published: req.body.date_published,
      })
      .where('id', req.params.id);
    res.status(200).send({ message: 'Book updated successfully.' });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
});

export default router;
