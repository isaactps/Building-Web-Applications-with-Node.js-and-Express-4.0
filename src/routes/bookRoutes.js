var express = require('express');
var bookRouter = express.Router();

function router(nav){
  var books= [
    {
      title: 'War',
      genre: 'Historical',
      author: 'Lev',
      read: false
    },
    {
      title: 'War',
      genre: 'Historical',
      author: 'Lev',
      read: false
    }
  ];

  bookRouter.route('/')
    .get((req, res) => {
      res.render(
      'booksView',
      {
      nav,
      title: 'Books',
      books: books
      }
    );
  })

  bookRouter.route('/:id')
    .get((req, res) => {
      var id = req.params.id;
      res.render(
      'bookListView',
      {
      nav,
      title: 'Book',
      book: books[id]
      }
    );
  })
  return bookRouter;
}

module.exports = router;
