import refs from './refs';

export function enable() {
  refs.loadMoreButt.removeAttribute('disabled');
  refs.loadMoreButt.textContent = 'Load more';
}
export function disable() {
  refs.loadMoreButt.setAttribute('disabled', 'disabled');
  refs.loadMoreButt.textContent = 'Searching...';
}

export function show() {
  refs.loadMoreButt.classList.remove('.hidden');
}
export function hide() {
  refs.loadMoreButt.classList.add('.hidden');
}
