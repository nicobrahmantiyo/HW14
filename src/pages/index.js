import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useState, useEffect } from 'react';
import BookForm from '../../components/BookForm';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch('/api/books');
      const data = await res.json();
      setBooks(data);
      setLoading(false);
    };

    fetchBooks();
  }, ['book']);

  if (loading) return <div>Loading..</div>;

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h1 className={styles.title}>Books</h1>
          <ul>
            {books.map((book) => {
              <li key={book.id}>
                {book.tytle} - {book.author}
              </li>;
            })}
          </ul>
          <BookForm onBookCreated={(book) => setBooks([...books, book])} />
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/books');
  const data = await res.json();
  return {
    props: {
      books: data,
    },
  };
};
