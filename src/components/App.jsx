import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Home from '../Pages/Home/Home';
import Registration from '../Pages/Registration/Registration';
import Login from '../Pages/Login/Login';
import Phonebook from '../Pages/Phonebook/Phonebook';

import AppBar from 'components/UserMenu/AppBar/AppBar';

import Loader from 'components/Loader/Loader';

import { refreshUser } from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import { RestrictedRoute } from 'components/UserMenu/RestrictedRoute';
import { PrivateRoute } from 'components/UserMenu/PrivateRoute';


const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={Registration} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={Phonebook} redirectTo="/login" />}
        />
      </Route>
    </Routes>
  );
};

export default App;
