const express = require('express');
const thoughtController = require('../../controllers/thought-controller');

const router = express.Router();

router.get('/api/thoughts', thoughtController.getThoughts);
router.post('/api/thoughts', thoughtController.createThought);

router.get('/api/thoughts/:thoughtId', thoughtController.getSingleThought);
router.put('/api/thoughts/:thoughtId', thoughtController.updateThought);
router.delete('/api/thoughts/:thoughtId', thoughtController.deleteThought);

router.post('/api/thoughts/:thoughtId/reactions', thoughtController.addReaction);
router.delete('/api/thoughts/:thoughtId/reactions/:reactionId', thoughtController.removeReaction);

module.exports = router;
