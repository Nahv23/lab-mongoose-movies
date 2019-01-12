const Movie = require('../models/celebrity.js');

module.exports.form = (req, res, next) => {
  Movie.find()
    .then ((movies) => res.render ('movies/index', {movies}))
    .catch(err => next(err))
};

module.exports.list = (req, res, next) => {
  Movie.find()
    .then ((movies) => res.render ('movies/list', {movies}))
    .catch(err => next(err))
};

module.exports.create = (req, res, next) => {
  res.render('movies/create');
}

module.exports.doCreate = (req, res, next) => {
  const Movie = new Movie(req.body);

  Movie.save()
    .then((Movie) => { res.redirect('/movies/list' )});
}

module.exports.get = (req, res, next) => {
  Movie.findById(req.params.id)
    .then(Movie => res.render('movies/detail', { Movie }));
}

module.exports.delete = (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(Movie => res.redirect('/movies/list'));
}


module.exports.edit = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((Movie) => {
      res.render('movies/index', { Movie })
    })
  }

  module.exports.doEdit = (req, res, next) => {
    Movie.findById(req.params.id)
      .then((Movie) => {
        Movie.set(req.body);
  
        Movie.save()
          .then((Movie) => { res.redirect('/movies/list' )});
      })
  }
