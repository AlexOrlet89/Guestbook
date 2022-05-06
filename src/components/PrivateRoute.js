import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export function PrivateRoute({ children, ...rest }) {
  //do we need this??
  const { user } = useUserContext();

  return (
    <Route
      {...rest}
      render={() =>
        user.email ? children : <Redirect to={{ pathname: '/login' }} />
      }
    />
  );
}
