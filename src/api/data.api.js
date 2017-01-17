import fetch from 'isomorphic-fetch';

const API_URL = 'http://localhost:5000';

export function loadBook(slug) {
  return fetch(`${API_URL}/api/get/book/${slug}`);
}

export function loadBooks(category = 'all', page = 0) {
  return fetch(`${API_URL}/api/get/books/${category}/${page}`);
}

export function loadCategories() {
  return fetch(`${API_URL}/api/get/categories`);
}

export function loadAuthors(page = 0) {
  return fetch(`${API_URL}/api/get/authors/${page}`);
}

export function loadAuthor(slug) {
  return fetch(`${API_URL}/api/get/author/${slug}`);
}
