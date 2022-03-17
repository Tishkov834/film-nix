import PropTypes from 'prop-types';
import Search from '../../images/icons/search-icon.svg';
import './styles.scss';

function SearchInput({ onSubmit }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <img src={Search} alt="search" className="search-form-image" />
      <input className="search-form-input" type="text" placeholder="Search Movies" />
    </form>
  );
}

SearchInput.propTypes = {
  onSubmit: PropTypes.func,
};

SearchInput.defaultProps = {
  onSubmit: () => {},
};

export default SearchInput;
