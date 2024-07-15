
import { useState } from "react";
const AddNewBook = ({onClose}) => {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishDate, setPublishDate] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSubmit = (e) => {
      
  
      const newBook = {
        image,
        title,
        author,
        publishDate,
        description
      };
  
      fetch('http://localhost:8080/book/book', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      })
        .then((res) => res.json())
        .then((data) => {
           console.log(data);});

      console.log(newBook);
      onClose();
    };
  



return (
    <>
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        
        <h2 className="text-xl font-bold mb-4">Add New Book</h2>
        
        <label className="block mb-2">Image URL:</label>
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Image url"
          required
        />
        <label className="block mb-2">Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="w-full p-2 border rounded"
          required
          placeholder="Book title"
        />
        <label className="block mb-2">Author:</label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          className="w-full p-2 border rounded"
          required
          placeholder="Authors name"
        />
        <label className="block mb-2">Publish Date:</label>
        <input
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
          type="date"
          className="w-full p-2 border rounded"
          required
          placeholder="Publish date"
        />
        
        <label className="block mb-2">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded border"
          rows="4"
          required
          placeholder='This book is about something awesome!'
        />
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 rounded mr-2"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Submit!
        </button>
        
      </div>
    </div>
    </>
  );};


export default AddNewBook;