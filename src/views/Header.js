import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export default function Header() {
  const { user, logout } = useUserContext();
  const history = useHistory();

  const handleLogout = () => {
    console.log('handleLogout');
    logout();
    history.replace('/login');
  };

  return (
    <>
      <h2>Guestbook Entries</h2>
      {user.email ? <p> welcome, {user.email}</p> : <p>no user</p>}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
