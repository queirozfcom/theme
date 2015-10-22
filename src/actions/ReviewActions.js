import Review from 'services/Review';

const review = new Review();

class ReviewActions {
  requestReviews(params) {
    // Call API with query parameter
    review.get(params)
    .then((result) =>
      this.actions.requestReviewSuccess(result.data)
    )
    .catch((error) =>
      this.actions.requestProductFail(error)
    );

    return params.productId;
  }

  requestReviewSuccess(product) {
    return product;
  }

  requestReviewFail(error) {
    return error;
  }
}

export default ReviewActions;
