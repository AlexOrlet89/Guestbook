import { screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
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
  const signInButton = screen.getByRole('button', { name: /sign in/i });

  expect(signInButton).toBeInTheDocument();
});

test('Should redirect to home upon login', async () => {
  render(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );
  const signInButton = screen.getByRole('button', { name: /sign in/i });
  const emailField = screen.getByLabelText(/email/i);
  const passwordField = screen.getByLabelText(/password/i);
  fireEvent.change(emailField, {
    target: { value: 'shania@gmail.com' },
  });
  fireEvent.change(passwordField, {
    target: { value: 'twain66' },
  });
  expect(emailField).toHaveValue('shania@gmail.com');
  expect(passwordField).toHaveValue('twain66');

  fireEvent.click(signInButton);

  const mlady = await screen.findByRole('heading', {
    name: /your entries, m'lady\.\.\./i,
  });
  screen.debug();
  expect(mlady).toBeInTheDocument();
});
