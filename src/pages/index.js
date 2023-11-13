import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch('/api/books');
      const data = await res.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h1 className={styles.tytle}>Books</h1>
          <ul>
            {books.map((book) => {
              <li key={book.id}>{book.tytle}</li>;
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
