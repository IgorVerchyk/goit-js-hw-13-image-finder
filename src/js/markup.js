import template from '../templates/gallery-item.hbs';
import refs from './refs';

export default function insertImage(hits) {
  const item = template(hits);
  refs.gallery.insertAdjacentHTML('beforeend', item);
}
