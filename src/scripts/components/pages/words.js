import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const showWords = (array) => {
  clearDom();

  const dasButton = `
  <button type="button" class="btn btn-dark" id="add-word-btn">Add Words</button>`;
  renderToDom('#new-word-btn', dasButton);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.Title}</h5>
    <p class="card-text">${item.Definition}</p>
    <p class="card-text">${item.Language}</p>
    <p class="card-text">${item.Time_Submitted}</p>
    <i class="btn btn-success fas fa-eye" id="view-word-btn--${item.firebaseKey}"></i>
    <i id="edit-word-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
    <i id="delete-word-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  </div>
</div>`;
  });
  renderToDom('#vocab-display', domString);
};

const emptyWords = () => {
  document.querySelector('#vocab-display').innerHTML = '<h1>No Words</h1>';
};

export { showWords, emptyWords };
