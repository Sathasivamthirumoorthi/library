import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import Book from './components/Books';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './components/Home';



function App() {


  
  return (
    <>    
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/books" element={<Book/>}></Route>
        <Route path="/books/addbook" element={<AddBook/>}></Route>
      </Routes>
    </Router>
    </>

  );

}

export default App;
