const router = require('express').Router();
const usersController = require('../controllers/users');

router.route('/')
  .get(usersController.index)
  .post(usersController.create);

router.route('/new')
  .get(usersController.new);

router.route('/:id')
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);

router.route('/:id/edit')
  .get(usersController.edit);

router.route('/:id/patch')
  .patch(usersController.patch);

module.exports = router;
