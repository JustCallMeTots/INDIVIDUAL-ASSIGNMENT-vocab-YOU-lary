import { createWords, updateWord } from '../../api/wordData';
import { showWords } from '../components/pages/words';

const formEvents = () => {
  document.querySelector('#main-shit').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-word')) {
      const wordObj = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
      };

      createWords(wordObj).then((wordArray) => showWords(wordArray));
    }

    if (e.target.id.includes('updaye-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const wordObj = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        firebaseKey
      };
      updateWord(wordObj).then(showWords);
    }
  });
};

export default formEvents;
