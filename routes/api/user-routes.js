const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user-controller');

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.get('/users/:userId', userController.getSingleUser);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);
router.post('/users/:userId/friends/:friendId', userController.addFriend);
router.delete('/users/:userId/friends/:friendId', userController.removeFriend);

module.exports = router;
