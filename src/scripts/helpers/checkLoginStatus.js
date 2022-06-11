import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/buttons/loginButton';
// import logoutButton from '../components/buttons/logoutButton';
import startApp from './startApp';
import firebaseConfig from '../../api/apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default checkLoginStatus;
