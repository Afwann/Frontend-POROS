
import React, { useState, useEffect } from 'react';
import "./DisplayBooks.module.css";

const DisplayBooks = ({clock}) => {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/book');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/book/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setBooks(books.filter((book) => book.id !== id));
      } else {
        console.error('Error deleting book:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };
  
  const handleEdit = (id) => {
    const bookToEdit = books.find((book) => book.id === id);
  
  };

  useEffect(() => {
    fetchData();
  }, [clock]);

  return (
    <div>
      <h2 className='dabu'>Daftar Buku</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Gambar</th>
            <th>Judul</th>
            <th>Genre</th>
            <th>Penulis</th>
            <th>Penerbit</th>
            <th>Tahun Terbit</th>
            <th>Jumlah Halaman</th>
            <th>Nomor Halaman yang Sedang Dibaca</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>
                {book.cover ? (
                  <img
                    src={`data:${book.cover.mimeType};base64,${Buffer.from(
                      book.cover.buffer.data
                    ).toString('base64')}`}
                    alt={book.title}
                    width="50"
                    height="auto"
                  />
                ) : (
                  '-'
                )}
              </td>
              <td>{book.title}</td>
              <td>{book.genre}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.publishYear}</td>
              <td>{book.totalPages}</td>
              <td>{book.currentPage}</td>
              <td>
                <button onClick={() => handleEdit(book.id)}>Edit</button>
                <button onClick={() => handleDelete(book.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
};

export default DisplayBooks;
