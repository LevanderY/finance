import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import DetailPage from './pages/DetailPage/DetailPage';
import MainPage from './pages/MainPage/MainPage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'} element={ <MainPage /> }/>
        <Route path={'ticker/:tickerId'} element={ <DetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
