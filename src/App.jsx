import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './containers/MainPage/MainPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='*' element={<Navigate to='/'/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
