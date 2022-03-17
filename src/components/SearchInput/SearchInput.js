import PropTypes from 'prop-types';
import Search from '../../images/icons/search-icon.svg';
import './styles.scss';

function SearchInput({ onSubmit, value, onChange }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <img src={Search} alt="search" className="search-form-image" />
      <input className="search-form-input" type="text" placeholder="Search Movies" value={value} onChange={onChange} />
    </form>
  );
}

SearchInput.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

SearchInput.defaultProps = {
  onSubmit: () => {},
  onChange: () => {},
  value: '',
};

export default SearchInput;
