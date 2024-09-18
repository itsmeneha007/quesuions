import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <label>Username: </label>
        <input type="text" name="username" /><br />
        <label>Password: </label>
        <input type="password" name="password" /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;