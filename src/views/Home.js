import React from 'react';
import { useUserContext } from '../context/UserContext';

export default function Home() {
  const { user } = useUserContext();

  return (
    <>
      <h2>Guestbook Entries</h2>
      {user ? <p>{user.email}</p> : <p>no user</p>}
      <ul>
        <li>an entry</li>
        <li>an entry</li>
        <li>an entry</li>
      </ul>
    </>
  );
}
