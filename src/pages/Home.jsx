import AddNewBook from "../components/AddNewBook";

import { useState, useEffect} from "react";
const Home = () => {

    const [isVisible, setIsVisible] = useState(false);
   
  
    const handleOpenAddNewBook = () => {
      setIsVisible(true);
    };
  
    const handleCloseAddNewBook = () => {
      setIsVisible(false);
    };

const books = [{image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/300px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg', title: 'title', author: 'author author', publishDate: '2024-07-07', description: 'This book is cool'},
{image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/300px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg', title: 'title', author: 'author author', publishDate: '2024-07-07', description: 'This book is ok'},
{image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/300px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg', title: 'title', author: 'author author', publishDate: '2024-07-07', description: 'This book is bad'},
];




return (
    <><div className="">
    <button className='rounded bg-indigo-600 p-6 text-white' onClick={handleOpenAddNewBook}> Add new book! </button>
    {isVisible && <AddNewBook onClose={handleCloseAddNewBook}/>}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4 bg-white">
      {books.map((book, index) => (
        <div
          key={index}
          
          className="p-4 border rounded shadow hover:shadow-lg cursor-pointer"
        >
            {book.image ? (
            <img
              className="w-full h-40 object-cover rounded"
              src={book.image}
              alt={book.title}
            />
          ) : (
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
          <h2 className="text-xl font-bold mb-2 text-center">{book.title}</h2>
          <h2 className="text-xl font-bold mb-2 text-center">{book.author}</h2>
          <p className="text-gray-500 items-center justify-center">Date: {book.publishDate}</p>
          <p className="text-gray-500 items-center justify-center"> {book.description}</p>

          
        </div>
      ))}
       
      
    </div>
    </div>
    </>
  );









}


export default Home;