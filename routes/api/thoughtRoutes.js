const router = require('express').Router();
const {
  createThought,
  getThoughts,
  getSingleThought,
  addReaction,
  deleteReaction,
  deleteThought,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts);

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

router.route('/create/:userId').post(createThought);

router.route('/reactions/:thoughtId/').delete(deleteReaction).post(addReaction);

module.exports = router;