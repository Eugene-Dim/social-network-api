const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user-Controller');

// /api/users
router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);

// /api/users/:userId
router.get('/users/:userId', userController.getSingleUser);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

// /api/users/:userId/friends/:friendId
router.post('/users/:userId/friends/:friendId', userController.addFriend);
router.delete('/users/:userId/friends/:friendId', userController.deleteFriend);

module.exports = router;
