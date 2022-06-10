import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="Title" placeholder="word">
      <label for="floatingInput">Word</label>
    </div>
      <div class="form-floating">
      <textarea class="form-control" placeholder="definition" id="Definition"></textarea>
      <label for="floatingTextarea">Definition</label>
    </div>
      <div class="form-floating" id="language">
      <input type="text" class="form-control" id="Language" placeholder="Language">
      <label for="floatingPassword">Language</label>
    </div>
    <button type="submit" class="btn btn-dark">Submit Word</button>
  </form>
  `;

  renderToDom('#form-shit', domString);
};

export default addWordForm;
