import React, { useState } from 'react';

const App = () => {
  const [books, setBooks] = useState([
    {
      title: 'Rich Dad Poor Dad',
      author: 'Robert',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorem porro exercitationem, maxime iste officiis in at vitae blanditiis excepturi nam cum reprehenderit rerum commodi harum quaerat tenetur aperiam quia perferendis omnis soluta, corrupti iusto libero? Repellendus optio aspernatur error harum, ipsam, suscipit, eaque aperiam distinctio ex eos culpa architecto?',
    },
  ]);

  const [popupVisible, setPopupVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const addBook = (e) => {
    e.preventDefault();
    if (!title || !author || !description) return;
    const newBook = { title, author, description };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
    setDescription('');
    setPopupVisible(false);
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <>
      <div className="navbar">
        <h1>Booksky</h1>
      </div>

      <div className="container">
        {books.map((book, index) => (
          <div className="book-container" key={index}>
            <h1>{book.title}</h1>
            <h5>{book.author}</h5>
            <p>{book.description}</p>
            <button onClick={() => deleteBook(index)}>Delete</button>
          </div>
        ))}
      </div>

      {popupVisible && <div className="popup-overlay" />}

      {popupVisible && (
        <div className="popup-box">
          <h2>Add Book</h2>
          <form onSubmit={addBook}>
            <input
              type="text"
              placeholder="Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Book Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <textarea
              placeholder="Short Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button type="submit">ADD</button>
            <button onClick={() => setPopupVisible(false)}>CANCEL</button>
          </form>
        </div>
      )}

      <button className="add-button" onClick={() => setPopupVisible(true)}>
        +
      </button>
    </>
  );
};

export default App;
