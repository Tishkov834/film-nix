import { useState } from 'react';
import { Form, Formik } from 'formik';
import { useParams } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useSelector } from 'react-redux';
import Loader from '../Loader';
import Button from '../common/Button';
import TextArea from '../common/TextArea';
import Rating from '../Rating';
import { reviewSchema } from '../../schemas/createReviewSchema';
import { createReview } from '../../api/review';
import './styles.scss';

function AddReviewsForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const alert = useAlert();
  const userId = useSelector(({ authorization }) => authorization.user.id);

  const initialValues = {
    review: '',
  };

  const handleCreateReview = (formValues, { resetForm }) => {
    const filmId = +id;
    const fullReviewData = {
      ...formValues, rating, filmId, userId,
    };
    setIsLoading(true);

    createReview(fullReviewData)
      .then(() => {
        alert.show('Review was Created!');
      })
      .catch(({ message }) => alert.error(message))
      .finally(() => {
        setIsLoading(false);
        setRating(0);
        resetForm();
      });
  };

  return (
    <Formik onSubmit={handleCreateReview} initialValues={initialValues} validationSchema={reviewSchema}>
      <Form className="add-review-form">
        <div className="add-review-form-content">
          <TextArea type="text" name="review" placeholderText="Write your review..." />
          <Rating handleStarClick={setRating} rating={rating} />
        </div>
        <Button className="add-review-form-button" type="submit" isDisabled={isLoading}>
          {isLoading && <Loader height="30" width="30" />}
          Add review
        </Button>
      </Form>
    </Formik>
  );
}

export default AddReviewsForm;
