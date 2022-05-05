import React from 'react';

export default function () {
  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />{' '}
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
        <button type="submit" aria-label="Sign In">
          Sign in
        </button>
        <hr />
      </form>
    </div>
  );
}
