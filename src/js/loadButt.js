import refs from './refs';

export default {
  enable() {
    refs.loadMoreButt.removeAttribute('disabled');
    refs.label.textContent = 'Load more';
    refs.spiner.classList.add('is-hidden');
  },
  disable() {
    refs.loadMoreButt.setAttribute('disabled', 'disabled');
    refs.label.textContent = 'Searching...';
    refs.spiner.classList.remove('is-hidden');
  },

  show() {
    refs.loadMoreButt.classList.remove('is-hidden');
  },
  hide() {
    refs.loadMoreButt.classList.add('is-hidden');
  },
};
