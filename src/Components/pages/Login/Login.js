import React from 'react';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import ErrorMessage from '../../shared/ErrorMessage';

const Login = () => {
  const navigate = useNavigate();
  const [currentUser] = useAuthState(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  if (currentUser) {
    navigate(from, { replace: true });
  }
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
        <div className='card-body'>
          <h2 className='text-center text-xl'>Login</h2>
          <form onSubmit={handleLogin}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                name='email'
                type='email'
                placeholder='email'
                className='input input-bordered'
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
              />
            </div>
            <div className='form-control mt-6'>
              <ErrorMessage errMsg={error?.message} />
              <button type='submit' className='btn btn-accent'>
                Login
              </button>
            </div>
          </form>
          <div className='mt-2'>
            <p className='text-xs text-center'>
              Don't have an account?
              <button
                onClick={() => navigate('/signup')}
                className='text-secondary font-bold cursor-pointer'
              >
                Create new account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
