const Celebrity = requred ('../models/celebrity.js');

module.exports.list = (req, res, next) => {
  Celebrity.find ()
    .then (celebrities) => res.render ('celebrities/list', {celebrities})

}