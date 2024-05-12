const express = require('express');

const {
  createReview,
  deleteReview,
  getAllReviews,
  getReview,
  setTourUserIds,
  updateReview
} = require('../controllers/reviewController');

const { protect } = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(getAllReviews)
  .post(protect, setTourUserIds, createReview);

router
  .route('/:id')
  .get(getReview)
  .patch(protect, setTourUserIds, updateReview)
  .delete(protect, deleteReview);

module.exports = router;
