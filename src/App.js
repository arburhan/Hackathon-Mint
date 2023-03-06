import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminPage from './Pages/Home/AdminPages/AdminPage';
import ChallengeDetails from './Pages/Home/Explore Challenge/ChallengeDetails';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/admin' element={<AdminPage></AdminPage>} ></Route>
        <Route path='/challenge/:id' element={<ChallengeDetails />} ></Route>
      </Routes>
    </>
  );
}

export default App;
