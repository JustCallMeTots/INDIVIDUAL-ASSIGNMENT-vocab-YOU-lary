// import { getSingleWord } from '../../api/wordData';
import addWordForm from '../components/form/addWordForm';
// import { showWords } from '../components/pages/words';

const domEvents = () => {
  document.querySelector('#main-shit').addEventListener('click', (e) => {
    if (e.target.id.includes('add-word-btn')) {
      addWordForm();
    }
  });
};

export default domEvents;
