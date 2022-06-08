import domBuilder from '../components/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
import navBar from '../components/navBar';
import { showWords } from '../components/pages/words';
import { getWords } from '../../api/wordData';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  formEvents();
  navBar();
  logoutButton();

  getWords().then((wordsArray) => showWords(wordsArray));
};

export default startApp;
