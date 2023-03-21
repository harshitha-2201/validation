import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();

    // Check if the username and password are valid
    if (username === 'example' && password === 'password123') {
      console.log('Login successful');
      setError(null);
    } else {
      console.log('Login failed');
      setError('Invalid username or password');
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className='formtag'>
      <h1>LogIn</h1>
        <div  className='formcontainer'>
               <label>
                 Username:
                 <input
                   type="text"
                   value={username}
                   onChange={event => setUsername(event.target.value)}
                 />
               </label>
               <br />
               <label>
                 Password:
                 <input
                   type="password"
                   value={password}
                   onChange={event => setPassword(event.target.value)}
                 />
               </label>
               <Link to = '/' className='links'> new? Click to Register</Link>
               <br />
               {error && <div style={{ color: 'red' }}>{error}</div>}
               <br />
               <button type="submit">Login</button>
               

            </div>
    </form>
  </>
  );
}

export default Login



//Login Credentials 
//name : example 
//password : password123