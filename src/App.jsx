import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';

export default function App() {
  return (
    <>
      <h1>Hello World, Guestbook :) </h1>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
