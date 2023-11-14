import Book from '../../../sequelize/models/Book';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const data = await Book.findAll();
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    const { tytle, author } = req.body;

    try {
      const book = await Book.create({
        tytle,
        author,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      res.status(200).json(book);
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(405).end();
  }
}
