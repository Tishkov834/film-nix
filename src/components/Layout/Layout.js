import PropTypes from 'prop-types';
import './styles.scss';

function Layout({ titleText, children, titleClassName }) {
  return (
    <div className="page">
      <h1 className={titleClassName}>{titleText}</h1>
      {children}
    </div>
  );
}

Layout.propTypes = {
  titleText: PropTypes.string,
  children: PropTypes.element,
  titleClassName: PropTypes.string,
};

Layout.defaultProps = {
  titleText: '',
  children: null,
  titleClassName: 'page-title',
};

export default Layout;
