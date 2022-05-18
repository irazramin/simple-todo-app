import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Home = () => {
  const [user] = useAuthState(auth)

  return (
    <div>
      <h2 className='text-center text-3xl mt-10'>
        Welcome to <span className='text-secondary'>RememberTask!!</span>
      </h2>
      {user ? (
        <h4 className='text-center text-3xl mt-10 text-success'>
         Now you can add your task.
        </h4>
      ) : (
        <h4 className='text-center text-3xl mt-10 text-success'>
          If you want to remember your important task.Please login first
        </h4>
      )}
    </div>
  );
}

export default Home