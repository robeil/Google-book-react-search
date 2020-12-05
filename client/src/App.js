import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Result from './components/Result';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [books, setBooks] = useState([]);
  return (
      <div className="App">
        <Header setBooks={setBooks}></Header>
        <Result books={books} setBooks={setBooks}></Result>
      </div>
  );
}

export default App;

