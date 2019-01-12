const express = require('express');
const router = express.Router();


const celebritiesController = require('../controllers/celebrities.controller');

router.get('/', celebritiesController.form);
router.get('/list', celebritiesController.list);
router.get('/create', celebritiesController.create)
router.post('/create', celebritiesController.doCreate)

// router.get('/:id', usersController.get)
// router.post('/:id/delete', usersController.delete)


module.exports = router;