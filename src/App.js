import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddTask from './Components/pages/AddTask/AddTask';
import Home from './Components/pages/Home/Home';
import Login from './Components/pages/Login/Login';
import RequireAuth from './Components/pages/RequireAuth/RequireAuth';
import Signup from './Components/pages/Signup/Signup';
import Header from './Components/shared/Header';

function App() {
  return (
    <div className='bg-base-100'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path='/addtask'
          element={
            <RequireAuth>
              <AddTask />
            </RequireAuth>
          }
        ></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  );
}

export default App;
