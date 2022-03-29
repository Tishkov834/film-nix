import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { getFilm } from '../../api/films';
import FilmDetailCard from '../../components/FilmDetailCard';
import Loader from '../../components/Loader';
import AddReviewsForm from '../../components/AddReviewsForm';
import ReviewsList from '../../components/ReviewsList';
import Layout from '../../components/Layout';
import { getFilmReviews } from '../../api/review';
import './styles.scss';

function FilmPage() {
  const [film, setFilm] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const alert = useAlert();
  const isUserAuthorized = useSelector(({ authorization }) => authorization.token);

  useEffect(() => {
    setIsLoading(true);

    getFilm(id)
      .then(({ data }) => setFilm(data))
      .catch(({ message }) => alert.error(message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getFilmReviews(id)
      .then(({ data }) => setReviews(data))
      .catch(({ message }) => alert.error(message));
  }, []);

  const onReviewDelete = (reviewId) => {
    setReviews(reviews.filter((review) => review.id !== reviewId));
  };

  const onAddReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <>
      {film && <FilmDetailCard film={film} />}
      {isLoading && <Loader />}
      <Layout titleText="Reviews" titleClassName="reviews-title">
        {isUserAuthorized && <AddReviewsForm onAddReview={onAddReview} />}
        <ReviewsList reviews={reviews} onReviewDelete={onReviewDelete} />
      </Layout>
    </>
  );
}

export default FilmPage;
