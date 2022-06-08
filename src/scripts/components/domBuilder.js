import renderToDom from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="navBar"></div>
    <div id="main-shit">
      <div id="new-word-btn"></div>
      <div id="form-shit"></div>
      <div id="vocab-display"></div>
      <div id="single-word"></div>
    </div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
