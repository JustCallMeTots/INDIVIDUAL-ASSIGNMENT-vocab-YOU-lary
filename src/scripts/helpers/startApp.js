import domBuilder from '../components/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
import navBar from '../components/navBar';
import { showWords } from '../components/pages/words';
import { getWords } from '../../api/wordData';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  formEvents(user.uid);
  navBar();
  logoutButton();
  navEvents(user.uid);

  getWords(user.uid).then((wordsArray) => showWords(wordsArray));
};

export default startApp;
