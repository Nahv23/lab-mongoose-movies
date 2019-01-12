const Celebrity = require('../models/celebrity.js');

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .then ((celebrities) => res.render ('celebrities/index', {celebrities}))
    .catch(err => next(err))
};