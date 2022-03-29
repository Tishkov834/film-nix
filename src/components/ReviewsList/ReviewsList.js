import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ReviewCard from '../ReviewCard';
import './styles.scss';

function ReviewsList({ reviews, onReviewDelete }) {
  const currentUserId = useSelector(({ authorization }) => authorization.user?.id);
  const orderedReview = [
    ...reviews.filter((review) => review.userId === currentUserId),
    ...reviews.filter((review) => review.userId !== currentUserId),
  ];

  return (
    <ul className="reviews-list">
      {orderedReview.map(({
        review, rating, id, username, date, userId,
      }) => (
        <li className="reviews-list-card" key={id}>
          <ReviewCard review={review} rating={rating} username={username} date={date} userId={userId} id={id} onReviewDelete={onReviewDelete} isUserReview={userId === currentUserId} />
        </li>
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    review: PropTypes.string,
    rating: PropTypes.number,
    id: PropTypes.number,
    username: PropTypes.string,
    date: PropTypes.string,
  })),
  onReviewDelete: PropTypes.func,
};

ReviewsList.defaultProps = {
  reviews: [],
  onReviewDelete: () => {},
};

export default ReviewsList;
