import Header from './components/header/Header';
import Filter from './components/filterProfile/Filter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import FilterBuild from './components/filterBuild/FilterBuild';
import MainMonitoring from './components/mainMonitoring/MainMonitoring';
import CardsBuild from './components/cardBuild/CardsBuild';
import MainBuild from './components/mainBuild/MainBuild';

function App() {
  return (
      <div className="App">
        {/* <MainMonitoring />
        <CardsBuild />
        <FilterBuild /> */}
        <Header/>
        <Routes>
          <Route path='/monitoring' element={<MainMonitoring/>}/>
          <Route path='/filterBuild' element={<MainBuild/>}/>
          <Route path='/' element={<Main/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
