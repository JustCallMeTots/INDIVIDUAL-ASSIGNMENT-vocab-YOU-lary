import { createWords, updateWord } from '../../api/wordData';
import { showWords } from '../components/pages/words';

const formEvents = () => {
  document.querySelector('#main-shit').addEventListener('submit', (e) => {
    e.preventDefault();
    const subbyTime = new Date();

    if (e.target.id.includes('submit-word')) {
      const wordObj = {
        Title: document.querySelector('#Title').value,
        Definition: document.querySelector('#Definition').value,
        Language: document.querySelector('#Language').value,
        Time_Submitted: subbyTime,
      };

      createWords(wordObj).then((wordArray) => showWords(wordArray));
    }

    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const wordObj = {
        Title: document.querySelector('#Title').value,
        Definition: document.querySelector('#Definition').value,
        Language: document.querySelector('#Language').value,
        firebaseKey
      };
      updateWord(wordObj).then(showWords);
    }
  });
};

export default formEvents;
