import PropTypes from 'prop-types';
import './styles.scss';

function InfoBox({ title, text }) {
  return (text
    && (
    <div className="info-field">
      <span className="info-field-title">{title}</span>
      <p className="info-field-text">{text}</p>
    </div>
    )
  );
}

InfoBox.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

InfoBox.defaultProps = {
  title: '',
  text: '-',
};

export default InfoBox;
