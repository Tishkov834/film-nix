import { useState } from 'react';
import PropTypes from 'prop-types';
import { useAlert } from 'react-alert';
import Rating from '../Rating';
import Button from '../common/Button';
import { removeReview } from '../../api/review';
import Triangle from '../../images/icons/triangle.svg';
import './styles.scss';

function ReviewCard({
  review, rating, username, date, isUserReview, id, onReviewDelete,
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const alert = useAlert();

  const handleRemoveReview = (event) => {
    event.preventDefault();
    setIsDeleting(true);

    removeReview(id)
      .then(() => onReviewDelete(id))
      .catch(({ message }) => alert.error(message))
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return (
    <div className={isUserReview ? 'user-review-card' : 'review-card'}>
      {isUserReview && <h3 className="user-review-card-title">Your review</h3>}
      <div className={isUserReview ? 'user-review-card-body' : 'review-card-body'}>
        {isUserReview && <Button className="user-review-card-body-delete" onClick={handleRemoveReview} disabled={isDeleting}>Delete</Button>}
        <p className="review-card-body-text">{review}</p>
        {rating === 0 || <Rating rating={rating} starsCount={rating - 1} />}
        {!isUserReview && <span className="review-card-body-date">{date}</span>}
      </div>
      {!isUserReview && (
      <>
        <img src={Triangle} alt="triangle" className="review-card-triangle" />
        <p className="review-card-author">{username}</p>
      </>
      )}
    </div>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.string,
  rating: PropTypes.number,
  username: PropTypes.string,
  date: PropTypes.string,
  isUserReview: PropTypes.bool,
  id: PropTypes.number,
  onReviewDelete: PropTypes.func,
};

ReviewCard.defaultProps = {
  review: '',
  rating: null,
  username: '',
  date: '',
  isUserReview: false,
  id: null,
  onReviewDelete: () => {},
};

export default ReviewCard;
