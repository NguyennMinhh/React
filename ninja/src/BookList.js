const BookList = ({books, title, handleDelete}) => {


    return ( 
        <div className="book-list">
            <h1> { title } </h1>
            {books.map((book) => (
                <div className="book-preview" key={book.id}>
                    <h2>Title: { book.title }</h2>
                    <p>Author: { book.author }</p>
                    <button onClick={() => handleDelete(book.id)}>Delete</button>
                </div>
            ))}
        </div>
     );
}
 
export default BookList;