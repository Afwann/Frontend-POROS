
import React, { useState, useEffect } from 'react';
import './AddBook.css';

const AddBook = ({setClock, clock}) => {
  const [bookData, setBookData] = useState({
    cover: '',
    title: '',
    genre: '',
    author: '',
    publisher: '',
    publishYear: '',
    totalPages: '',
    currentPage: '',
    status: '',
  });

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/book');
      const data = await response.json();
      console.log(data)
      setBookData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event) => {
    setBookData({ ...bookData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData();
  for (const key in bookData) {
    formData.append(key, bookData[key]);
  }

  try {
    const response = await fetch('http://localhost:3000/book', { // Ganti dengan URL API Anda
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      
      console.log('Data berhasil dikirim ke back-end');
    } else {
      console.error('Error mengirim data:', response.statusText);
    }
  } catch (error) {
    console.error('Error mengirim data:', error);
  }
};

  

  return (
    <div className="add-book">
      <h2>Tambah Buku</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cover">Foto Sampul Buku (Opsional):</label>
        <input
          type="file"
          id="cover"
          name="cover"
          onChange={handleChange}
        />
        <label htmlFor="title">Judul Buku:</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={handleChange}
        />
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          required
          onChange={handleChange}
        />
        <label htmlFor="author">Penulis:</label>
        <input
          type="text"
          id="author"
          name="author"
          required
          onChange={handleChange}
        />
        <label htmlFor="publisher">Penerbit:</label>
        <input
          type="text"
          id="publisher"
          name="publisher"
          required
          onChange={handleChange}
        />
        <label htmlFor="publishYear">Tahun Terbit:</label>
        <input
          type="number"
          id="publishYear"
          name="publishYear"
          required
          onChange={handleChange}
        />
        <label htmlFor="totalPages">Jumlah Halaman:</label>
        <input
          type="number"
          id="totalPages"
          name="totalPages"
          required
          onChange={handleChange}
        />
        <label htmlFor="currentPage">Nomor Halaman yang Sedang Dibaca:</label>
        <input
          type="number"
          id="currentPage"
          name="currentPage"
          required
          onChange={handleChange}
        />
        <button onClick={()=> setClock(!clock)} type="submit">Tambah Buku </button >
      </form>
    </div>
  );
};

export default AddBook
