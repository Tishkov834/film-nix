import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from '../../pages/RegistrationPage';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import Header from '../Header';
import GuestRoute from '../GuestRoute';
import store, { persistor } from '../../store';
import { HOME_PAGE, LOGIN, REGISTRATION } from '../../constants/routes';
import './styles.scss';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div id="wrapper">
            <Header />
            <Routes>
              <Route exact path={HOME_PAGE} element={<HomePage />} />
              <Route path={REGISTRATION} element={<GuestRoute component={RegistrationPage} />} />
              <Route path={LOGIN} element={<GuestRoute component={LoginPage} />} />
            </Routes>
          </div>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
