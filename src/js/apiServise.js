const apiKey = '17651389-56d50551944c5e0543b25b372';

export default {
  searchQuery: '',
  page: 1,
  async searchImg() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;

    const res = await fetch(url);
    const { hits } = await res.json();
    this.nextPage();
    return hits;
  },

  nextPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
