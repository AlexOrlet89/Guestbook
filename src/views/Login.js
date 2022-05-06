import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export default function () {
  const { login, user } = useUserContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('handleLogin');
    try {
      await login(email, password);
      console.log(user);
      history.replace('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{' '}
        <label>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button name="submit" type="submit">
          Sign in
        </button>
        <hr />
      </form>
    </div>
  );
}
