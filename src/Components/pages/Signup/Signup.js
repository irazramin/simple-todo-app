import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import ErrorMessage from '../../shared/ErrorMessage';

const Signup = () => {
    const navigate = useNavigate();
const [createUserWithEmailAndPassword, user, loading, error] =
  useCreateUserWithEmailAndPassword(auth);

  const handleSignup = e =>{
      e.preventDefault();

      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      createUserWithEmailAndPassword(email,password);

  }
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
        <div className='card-body'>
          <h2 className='text-center text-xl'>Signup</h2>
          <form onSubmit={handleSignup}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                name='name'
                type='name'
                placeholder='name'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                name='email'
                type='email'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control mt-6'>
              <ErrorMessage errMsg={error?.message} />
              <button type='submit' className='btn btn-accent'>
                Signup
              </button>
            </div>
          </form>
          <div className='mt-2'>
            <p className='text-xs text-center'>
              Already have an account? 
              <button
                onClick={() => navigate('/login')}
                className='text-secondary font-bold cursor-pointer'
              >
               Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup