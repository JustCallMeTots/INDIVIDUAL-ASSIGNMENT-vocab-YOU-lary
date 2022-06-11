import { deleteWord, getSingleWord } from '../../api/wordData';
import addWordForm from '../components/form/addWordForm';
import viewWord from '../components/pages/viewWords';
import { showWords } from '../components/pages/words';

const domEvents = (uid) => {
  document.querySelector('#main-shit').addEventListener('click', (e) => {
    // ADD THAT WORD
    if (e.target.id.includes('add-word-btn')) {
      addWordForm(uid);
    }
    // DELETE DAT WORD
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure about that? -John Cena')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteWord(firebaseKey).then((wordArray) => showWords(wordArray));
      }
    }
    // FIX-IT-FELIX
    if (e.target.id.includes('edit-word')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleWord(firebaseKey).then((wordObj) => addWordForm(wordObj));
    }
    // ONE WORD PLEASE
    if (e.target.id.includes('view-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      viewWord(firebaseKey).then((wordArray) => viewWord(wordArray));
    }
  });
};

export default domEvents;
