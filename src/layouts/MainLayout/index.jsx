// MainLayout.js

import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLocale, selectTheme } from '@containers/App/selectors';

import SideNavbar from '@components/SideNavbar';

const MainLayout = ({ children, locale, theme, intl: { formatMessage } }) => (
  <SideNavbar title={formatMessage({ id: 'app_title_header' })} locale={locale} theme={theme}>
    {children}
  </SideNavbar>
);

const mapStateToProps = createStructuredSelector({
  locale: selectLocale,
  theme: selectTheme,
});

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  locale: PropTypes.string,
  theme: PropTypes.string,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(connect(mapStateToProps)(MainLayout));
