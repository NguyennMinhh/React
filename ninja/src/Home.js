import { useState, useEffect } from "react";
import BookList from "./BookList";

const Home = () => {
    const [books, setBooks] =useState(null);

    const handleDelete = (id) => {
        const newBooks = books.filter(book => book.id !== id);
        setBooks(newBooks);
    }

    useEffect(() => {
        fetch('http://localhost:8000/books')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBooks(data);
            });
    }, []) 

    return (
        <div className="home">
            
            {/* Tại vì useState là null, nên lần đầu, <BookList /> sẽ chuyển giá trị 'books' vào với giá trị null là props, qua đó gây ra lỗi */}
            {/* Để xử lý trường hợp này, ta thêm ít cú pháp JS, dùng toán từ &&  */}
            {/* như ở dưới, nếu 'books' == false, nó sẽ không quan tâm đến việc chạy phần <BookList />. Nhưng nếu 'books' == true, nó sẽ chạy <BookList /> */}
            {books && <BookList books={books.filter((book) => book.published === true)}  
                      title="All  published books!" 
                      handleDelete={handleDelete}
            />}
        </div>
     );
}
 
export default Home;