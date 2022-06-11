import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const viewWord = (item) => {
  clearDom();

  const domString = `
    <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
       <i id="edit-word-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-word--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h5>${item.Title}</h5>
     <p>${item.Definition}</p>
     <p>${item.Time_Submitted}</p>      
      </div>
    </div>`;

  renderToDom('#single-word', domString);
};

export default viewWord;
