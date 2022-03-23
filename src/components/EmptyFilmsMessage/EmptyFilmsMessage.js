import PropTypes from 'prop-types';
import './styles.scss';

function EmptyFilmsMessage({ text }) {
  return (
    <div className="empty-films-message">
      <p>{text}</p>
    </div>
  );
}
EmptyFilmsMessage.propTypes = {
  text: PropTypes.string,
};

EmptyFilmsMessage.defaultProps = {
  text: '',
};

export default EmptyFilmsMessage;
