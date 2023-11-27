import Header from './components/header/Header';
import Filter from './components/filterProfile/Filter';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import FilterBuild from './components/filterBuild/FilterBuild';
import MainMonitoring from './components/mainMonitoring/MainMonitoring';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header />
        <Filter />
        <Main />
        <Footer /> */}
        <MainMonitoring />
      </div>
    </BrowserRouter>
  );
}

export default App;
