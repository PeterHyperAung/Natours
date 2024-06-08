const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.use(authController.protect);
router.patch('/updateMyPassword', authController.updatePassword);

router.patch(
  '/updateMe',
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);
router.delete('/deleteMe', userController.deleteMe);

router
  .route('/')
  .get(
    authController.restrictTo('admin', 'lead-guide'),
    userController.getAllUsers
  )
  .post(
    authController.restrictTo('admin', 'lead-guide'),
    userController.createUser
  );

router
  .route('/:id')
  .get(authController.restrictTo('admin', 'lead-guide'), userController.getUser)
  .patch(
    authController.restrictTo('admin', 'lead-guide'),
    userController.updateUser
  )
  .delete(
    authController.restrictTo('admin', 'lead-guide'),
    userController.deleteUser
  );

module.exports = router;
