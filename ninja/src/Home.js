import { useState, useEffect } from "react";
import BookList from "./BookList";

const Home = () => {
    const [books, setBooks] = useState([
        { title:'The Kite Runner', author: 'Khaled Hosseini', published: true, id: 1},
        { title: 'Guns, Germs, and Steel', author: 'Jared Diamond', published: true, id: 2},
        { title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', published: true, id: 3},
        { title: 'A Song of Ice and Fire', author: 'George R. R. Martin, Martin G R R', published: false, id: 4},
        { title: 'To kill a mockingbird', author: 'Harper Lee', published: true, id: 5},
        { title: 'Plato and a Platypus Walk into a Bar', author: 'Thomas Cathcart', published: false, id: 6}
    ]

    const handleDelete = (id) => {
        const newBooks = books.filter(book => book.id !== id);
        setBooks(newBooks);
    }

    useEffect(() => {
        fetch('http://localhost:8000/')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
            })
    }, []) 

    return (
        <div className="home">
            {/* 2 reason to use Props:  - Make our component more reusable
                                        - Allow us to use 'books' data in 'Home' component
            */}

            {/* Chuyển vào Prop những quyển sách đã được phát hành */}
            <BookList books={books.filter((book) => book.published === true)}  
                      title="All  published books!" 
                      handleDelete={handleDelete}
            />

     );
}
 
export default Home;