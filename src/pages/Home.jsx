

import { useState, useEffect} from "react";
const Home = () => {
    const [allBooks, setAllBooks] = useState([]);
    console.log(allBooks);

   /* const books = [{image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/300px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg', title: 'title', author: 'author author', publishDate: '2024-07-07', description: 'This book is cool'},
        {image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/300px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg', title: 'title', author: 'author author', publishDate: '2024-07-07', description: 'This book is ok'},
        {image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/300px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg', title: 'title', author: 'author author', publishDate: '2024-07-07', description: 'This book is bad'},
        {image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/300px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg', title: 'title', author: 'author author', publishDate: '2024-07-07', description: 'This book is cool'},
    {image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/300px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg', title: 'title', author: 'author author', publishDate: '2024-07-07', description: 'This book is ok'},
    {image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/300px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg', title: 'title', author: 'author author', publishDate: '2024-07-07', description: 'This book is bad'},
    {image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/300px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg', title: 'title', author: 'author author', publishDate: '2024-07-07', description: 'This book is cool'},
    {image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/300px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg', title: 'title', author: 'author author', publishDate: '2024-07-07', description: 'This book is ok'},
    {image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/300px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg', title: 'title', author: 'author author', publishDate: '2024-07-07', description: 'This book is bad'},
    ];*/

useEffect(async () => {
    console.log(localStorage.getItem('token'));
    try {
        const res = await fetch('https://bookstorebackend-3qw1.onrender.com/', {
          method: "GET",
          headers: {
            "x-auth-token":localStorage.getItem('token'),
            "Content-Type": "application/json",
          },
          
        });
        const data = await res.json();
        console.log(data);
        if (!res.ok) {
          setError(data.error || "Login failed");
          toast.error(data.error || "Login failed");
        } else {
          const { token} = data;
          localStorage.setItem("token", token);
          toast("Login success");
          setIsLoged(true);
          return true;
        }
      } catch (error) {
        setError(error.message);
      }
    
      setAllBooks(data);
        
     },[]);


return (
    <><div className="py-16 bg-teal-100 min-h-screen">
   
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4  ">
      {allBooks.map((book, index) => (
        <div
          key={index}
          
          className="p-4 border rounded shadow hover:shadow-lg cursor-pointer bg-gray-100"
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
          <p className="text-gray-500 text-center">Date: {book.publishDate}</p>
          <p className="text-gray-500 text-center"> {book.description}</p>

          
        </div>
      ))}
       
      
    </div>
    </div>
    </>
  );









}


export default Home;