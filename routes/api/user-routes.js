const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend
} = require('../../controllers/user-controller');

// GET & POST  for /api/users
router 
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// GET, PUT, & DELETE for /api/users/:id
router 
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// POST & DELETE for /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend);


module.exports = router;