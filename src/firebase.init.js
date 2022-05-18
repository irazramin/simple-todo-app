// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBALIFQ08vrKf48vXrKqutJSbA0WnqSPlo',
  authDomain: 'todo-list-100fb.firebaseapp.com',
  projectId: 'todo-list-100fb',
  storageBucket: 'todo-list-100fb.appspot.com',
  messagingSenderId: '781957819846',
  appId: '1:781957819846:web:3305d68f9b1ff81afe16c7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;