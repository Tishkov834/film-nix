import PropTypes from 'prop-types';
import EmptyResult from '../../images/empty-result.svg';
import './styles.scss';

function EmptySearchResult({ text }) {
  return (
    <div className="empty-result">
      <img src={EmptyResult} alt="empty-result" className="empty-result-image" />
      <span className="empty-result-text">{`"${text}" is not found`}</span>
    </div>
  );
}

EmptySearchResult.propTypes = {
  text: PropTypes.string,
};

EmptySearchResult.defaultProps = {
  text: '',
};

export default EmptySearchResult;
