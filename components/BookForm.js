import { useState } from 'react';

const BookForm = ({ onBookCreated }) => {
  const [tytle, setTytle] = useState('');
  const [author, setAuthor] = useState('');
  const handleInputChange = (e) => {
    setNewBook(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('./api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tytle: tytle, author: author }),
      });

      if (res.ok) {
        const createdBook = await Response.json();
        onBookCreated(createdBook);
        setNewBook('');
      } else {
        console.error('Error creating book');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Tytle" value={tytle} onChange={(e) => setTytle(e.target.value)} />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Create book</button>
    </form>
  );
};

export default BookForm;
