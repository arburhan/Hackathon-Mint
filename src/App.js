import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminPage from './Pages/Home/AdminPages/AdminPage';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/admin' element={<AdminPage></AdminPage>} ></Route>
      </Routes>
    </>
  );
}

export default App;
