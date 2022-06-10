import { deleteWord, getSingleWord } from '../../api/wordData';
import addWordForm from '../components/form/addWordForm';
import { showWords } from '../components/pages/words';

const domEvents = () => {
  document.querySelector('#main-shit').addEventListener('click', (e) => {
    // ADD THAT WORD
    if (e.target.id.includes('add-word-btn')) {
      addWordForm();
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
  });
};

export default domEvents;
