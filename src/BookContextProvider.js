import React from "react";
import useGet from "./Hooks/useGet";

const BookContext = React.createContext({
    books: []
});

function BookContextProvider({ children }) {
    const { bookData: books, isLoading: booksLoading, refresh: refreshBooks, errMessage:err} = useGet('http://localhost:8000/books');

    const context = {
        books,
        booksLoading,
        refreshBooks,
        err
    }

    
    return (
        <BookContext.Provider value={context}>
            {children}
        </BookContext.Provider>
    ); 
}
export {
    BookContext,
    BookContextProvider
};