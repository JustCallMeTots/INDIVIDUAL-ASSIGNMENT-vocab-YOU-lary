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
    <select class="form-select" id="Language" aria-label="Default select example">
            <option selected>Language</option>
            <option value="English">English</option>
            <option value="Hebrew">Hebrew</option>
            <option value="Spanish">Spanish</option>
          </select>
    <button type="submit" class="btn btn-dark">Submit Word</button>
  </form>
  `;

  renderToDom('#form-shit', domString);
};

export default addWordForm;
