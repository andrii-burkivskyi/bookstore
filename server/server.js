const express = require('express');
const path = require('path');
const dataAPI = require('./dataAPI/dataAPI.js');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, '/public')));
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  response.header('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/api/get/books/:category/:page', (request, response, next) => {
  const { category, page } = request.params;

  response.json(dataAPI.getBooksByCategory(category, page));
  next();
});

app.get('/api/get/book/:slug/', (request, response, next) => {
  const { slug } = request.params;

  response.json(dataAPI.getBookBySlug(slug));
  next();
});

app.get('/api/get/categories', (request, response, next) => {
  response.json(dataAPI.getCategories());
  next();
});

app.get('/api/get/authors/:page', (request, response) => {
  const { page } = request.params;

  response.json(dataAPI.getAuthors(page));
});

app.get('/api/get/author/:slug', (request, response) => {
  const { slug } = request.params;

  response.json(dataAPI.getAuthorBySlug(slug));
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
