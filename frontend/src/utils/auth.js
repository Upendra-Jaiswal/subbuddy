// src/utils/auth.js
import jwtDecode from 'jwt-decode';

const TOKEN_KEY = 'jwtToken'; // Key for storing the token

// Function to check if the token is expired
const isTokenExpired = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Current time in seconds

    // Check if the token's expiration time is less than the current time
    return decodedToken.exp < currentTime;
  } catch (error) {
    return true; // If decoding fails, consider the token as expired
  }
};

// Function to check if the user is logged in
export const  isLoggedIn = () => {
  const token = localStorage.getItem(TOKEN_KEY);

  if (!token || isTokenExpired(token)) {
    return false;
  }

  return true;
};

// Function to log out the user
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
