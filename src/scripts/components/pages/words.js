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
  </div>
</div>`;
  });
  renderToDom('#vocab-display', domString);
};

const emptyWords = () => {
  document.querySelector('#vocab-display').innerHTML = '<h1>No Words</h1>';
};

export { showWords, emptyWords };
