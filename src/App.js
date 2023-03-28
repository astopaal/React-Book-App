import {BookProvider} from './context/BookContext'
import ShowBooks from './components/ShowBooks'
import SearchInput from './components/SearchInput'
import './App.css';

function App() {
  return (
    <div className="App mt-20 flex flex-col justify-center items-center">
      <BookProvider>
        <SearchInput />
        <ShowBooks />
      </BookProvider>
    </div>
  );
}

export default App;
