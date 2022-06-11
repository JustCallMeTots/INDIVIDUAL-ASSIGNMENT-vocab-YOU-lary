import { getWords, wordsEnglish } from '../../api/wordData';
import { showWords } from '../components/pages/words';

const navEvents = (uid) => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    if (e.target.id.includes('#full-vocab')) {
      getWords(uid).then((wordsArray) => showWords(wordsArray));
    } else if (e.target.id.includes('#english')) {
      wordsEnglish(uid).then((wordsArray) => showWords(wordsArray));
    }
  });
};

export default navEvents;
