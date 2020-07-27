import './styles.css';
import refs from './js/refs';
import apiServise from './js/apiServise';
import { enable, disable, show, hide } from './js/loadButt';
import insertImage from './js/markup';
refs.searchForm.addEventListener('submit', submitHandler);
refs.loadMoreButt.addEventListener('click', searchImage);

function submitHandler(event) {
  event.preventDefault();

  const teg = event.currentTarget;
  apiServise.searchQuery = event.currentTarget.elements.query.value;

  searchImage();
  clearContainer();
  apiServise.resetPage();
  teg.reset();
}

function searchImage() {
  disable();
  apiServise.resetPage();
  apiServise.searchImg().then(hits => {
    insertImage(hits);

    show();
    enable();

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

    if (hits.length < 12) {
      hide();
    }
  });
}

function clearContainer() {
  refs.gallery.innerHTML = '';
}
