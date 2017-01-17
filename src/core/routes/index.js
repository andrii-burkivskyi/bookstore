import React from 'react';
import { Route, Redirect, IndexRedirect } from 'react-router';

import CorePage from '../../pages/CorePage.jsx';
import BooksListPage from '../../pages/BooksListPage.jsx';
import BookSinglePage from '../../pages/BookSinglePage.jsx';
import AuthorsListPage from '../../pages/AuthorsListPage.jsx';
import AuthorSinglePage from '../../pages/AuthorSinglePage.jsx';

export default (
  <Route path="/" component={CorePage}>
    <IndexRedirect to="/books/all" />
    <Redirect from="/books" to="/books/all" />
    <Route path="/books">
      <Route path=":category" component={BooksListPage} />
    </Route>
    <Route path="/book/:title" component={BookSinglePage} />
    <Route path="/authors" component={AuthorsListPage} />
    <Route path="/author/:name" component={AuthorSinglePage} />
  </Route>
);
