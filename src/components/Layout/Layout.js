import PropTypes from 'prop-types';
import './styles.scss';

function Layout({ titleText, children }) {
  return (
    <div className="page">
      <h1 className="page-title">{titleText}</h1>
      {children}
    </div>
  );
}

Layout.propTypes = {
  titleText: PropTypes.string,
  children: PropTypes.element,
};

Layout.defaultProps = {
  titleText: '',
  children: null,
};

export default Layout;
