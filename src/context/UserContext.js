import { createContext, useState } from 'react';
import { getUser, signInUser } from '../services/user';
//this is our custom context for providing user data through out our site.
export const UserContext = createContext();
// now we create our custom Provider to wrap around app.js, deconstructed children will be whatever's wrapped in it.
export const UserProvider = ({ children }) => {
  // checks to see if there is a current user and returns the user or falsy
  const currentUser = getUser();
  // creates the user the provider will pass to children. default value is what getuserreturns or null.
  const [user, setUser] = useState(currentUser || { email: null });
  //create the login function the provider will pass to children. async, takes password and email
  const login = async (email, password) => {
    //setUser to our sign, else throw
    try {
      const authenticatedUser = await signInUser({ email, password });

      if (authenticatedUser) {
        setUser(authenticatedUser);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
