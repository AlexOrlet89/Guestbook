import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import Header from './Header';

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
      <Header />
      <ul>
        <li>an entry</li>
        <li>an entry</li>
        <li>an entry</li>
      </ul>
    </>
  );
}
