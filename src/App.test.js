import { loadOptions } from '@babel/core';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/UserContext';

// //We should think about what we wanna test here a bit.
// page should redirect to login upon load: this should be colocated here, we will memory route the app create a fake server that returns a s
// page should redirect to home upon login
// entries should load upon home page load
// new entry should render upon submission

test('Page should redirect to /login upon load', async () => {
  render(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );
  const signInButton = screen.getByRole('button', { text: 'submit' });
  screen.debug();

  expect(signInButton).toBeInTheDocument();
});
