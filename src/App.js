import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Components/pages/AddTask/AddTask';
import Home from './Components/pages/Home/Home';
import Header from './Components/shared/Header';

function App() {
  return (
    <div className='bg-base-100'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addtask' element={<AddTask />}></Route>
      </Routes>
    </div>
  );
}

export default App;
