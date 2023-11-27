import Header from './components/header/Header';
import Filter from './components/filter/Filter';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Filter />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
