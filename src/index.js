import './styles.css';
import refs from './js/refs';
import apiServise from './js/apiServise';
import buttActions from './js/loadButt';
import insertImage from './js/markup';
refs.searchForm.addEventListener('submit', submitHandler);
refs.loadMoreButt.addEventListener('click', searchImage);

function submitHandler(event) {
  event.preventDefault();

  const teg = event.currentTarget;
  apiServise.searchQuery = event.currentTarget.elements.query.value;

  clearContainer();
  apiServise.resetPage();
  searchImage();
  teg.reset();
}

function searchImage() {
  buttActions.disable();
  apiServise.searchImg().then(hits => {
    insertImage(hits);
    buttActions.show();
    buttActions.enable();

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

    if (hits.length < 12) {
      buttActions.hide();
    }
  });
}

function clearContainer() {
  refs.gallery.innerHTML = '';
}
