import books from '@/../../sequelize/models/books';

export default async function books(req, res) {
  if (req.method === 'GET') {
    const data = await books.findAll();
    res.status(200).json(data);
  } else {
    res.status(403).end();
  }
}
