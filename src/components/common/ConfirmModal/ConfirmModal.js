import PropTypes from 'prop-types';
import Button from '../Button';
import './styles.scss';

function ConfirmModal({ message, onClose, onDelete }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p className="modal-content-text">{message}</p>
        <div className="modal-content-buttons">
          <Button className="modal-content-button" onClick={onDelete}>Ok</Button>
          <Button className="modal-content-button" onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}

ConfirmModal.propTypes = {
  message: PropTypes.string,
  onDelete: PropTypes.func,
  onClose: PropTypes.func,
};

ConfirmModal.defaultProps = {
  message: '',
  onDelete: () => {},
  onClose: () => {},
};

export default ConfirmModal;
