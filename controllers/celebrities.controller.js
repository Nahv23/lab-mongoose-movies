const Celebrity = require('../models/celebrity.js');

module.exports.form = (req, res, next) => {
  Celebrity.find()
    .then ((celebrities) => res.render ('celebrities/index', {celebrities}))
    .catch(err => next(err))
};

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .then ((celebrities) => res.render ('celebrities/list', {celebrities}))
    .catch(err => next(err))
};

module.exports.create = (req, res, next) => {
  res.render('celebrities/create');
}

module.exports.doCreate = (req, res, next) => {
  const celebrity = new Celebrity(req.body);

  celebrity.save()
    .then((celebrity) => { res.redirect('/celebrities/list' )});
}

module.exports.get = (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => res.render('celebrities/detail', { celebrity }));
}

module.exports.delete = (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(Celebrity => res.redirect('/celebrities/list'));
}