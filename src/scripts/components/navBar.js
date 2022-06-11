import renderToDom from '../helpers/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vocab Words</a>
   
    <div class="collapse navbar-collapse" id="navbarStuff">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#" id="full-vocab">Full Vocab List</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#" id="english">English</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="hebrew">Hebrew</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="spanish">Spanish</a>
      </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    `;
  renderToDom('#navBar', domString);
};

export default navBar;
