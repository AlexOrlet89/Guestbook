import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

export default function () {
  const { login, user, signUp } = useUserContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log('handleLogin');
    try {
      await login(email, password);
      // console.log(user);
      history.replace('/');
    } catch (error) {
      // console.log(error.message);
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    // console.log('handleLogin');
    try {
      await signUp(email, password);
      // console.log(user);
      history.replace('/');
    } catch (error) {
      // console.log(error.message);
    }
  };

  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />{' '}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button name="submit" type="submit" onClick={handleLogin}>
        Sign in
      </button>
      <button name="submit" type="submit" onClick={handleSignUp}>
        Sign up
      </button>
      <hr />
    </div>
  );
}
