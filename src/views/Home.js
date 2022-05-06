import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export default function Home() {
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
      {user ? <p>{user.email}</p> : <p>no user</p>}
      <button onClick={handleLogout}>Logout</button>
      <ul>
        <li>an entry</li>
        <li>an entry</li>
        <li>an entry</li>
      </ul>
    </>
  );
}
