import logo from './logo.svg';
import './App.css';
import { BookContextProvider } from './BookContextProvider';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Navbar from './Components/Navbar';
import Bookspage from './Pages/Bookspage';
import Bookpage  from './Pages/Bookpage';


function App() {
  return (
    <BookContextProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
                <Route path = "/" element={<Homepage/>}/>
                <Route path = "/books" element={<Bookspage/>}/>
                <Route path='/books/:id' element={<Bookpage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </BookContextProvider>
);
}

export default App;
