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