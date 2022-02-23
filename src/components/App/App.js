import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import RegistrationPage from '../../pages/RegistrationPage';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import Header from '../Header';
import UserPage from '../../pages/UserPage';
import GuestRoute from '../GuestRoute';
import PrivateRoute from '../PrivateRoute';
import store, { persistor } from '../../store';
import {
  HOME_PAGE,
  LOGIN,
  REGISTRATION,
  USER_PAGE,
} from '../../constants/routes';
import './styles.scss';

function App() {
  const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
  };

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div id="wrapper">
              <Header />
              <Routes>
                <Route exact path={HOME_PAGE} element={<HomePage />} />
                <Route path={REGISTRATION} element={<GuestRoute component={RegistrationPage} />} />
                <Route path={LOGIN} element={<GuestRoute component={LoginPage} />} />
                <Route path={USER_PAGE} element={<PrivateRoute component={UserPage} />} />
              </Routes>
            </div>
          </PersistGate>
        </Provider>
      </Router>
    </AlertProvider>
  );
}

export default App;
