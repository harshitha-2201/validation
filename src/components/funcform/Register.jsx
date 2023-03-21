

import  {React , useState} from 'react'
import { Link } from 'react-router-dom';

import './Register.css'
const Register = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [error , setError] = useState({})
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleName = event =>{
        setName( event.target.value)
    }
    const handleEmail = event =>{
        setEmail( event.target.value)
    }
 
  const handlepassword = event =>{
      setPassword(event.target.value)
  }
 
  const handleSubmit = event => {
    event.preventDefault();

    // Validation logic
    let error = {};

    // Name validation
    if (name === '') {
      error.name = 'Name is required';
    } else if (name.length < 3) {
      error.name = 'Name must be at least 3 characters long';
    }
    if(email === ''){
        error.email = 'Email is required'
    }

    // Password validation
    if (password === '') {
      error.password = 'Password is required';
    } else if (password.length < 6) {
      error.password = 'Password must be at least 6 characters long';
    }

    setError(error);
    if (Object.keys(error).length === 0) {
        console.log('Form submitted successfully');
      setFormSubmitted(true)
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div  className='container'>
       <>
          {!formSubmitted ? ( <form  className='formtag' onSubmit={handleSubmit} >
             <h1>Register</h1>
               <div className='formcontainer'>
                     <label htmlFor='user' >UserName :</label>
                     <input type = 'text' id = 'user' name = 'name' value = {name} onChange = {handleName}/>
                     {error.name && <span className=' errmsg'>{error.name}</span>}
                     <label htmlFor='mail'>Email :</label>
                     <input  type = 'email' id = 'mail' name = 'email' value={email} onChange={handleEmail}/>
                     {error.email && <span className=' errmsg'>{error.email}</span>}
                     <label htmlFor='passwd'>Password :</label>
                     <input  type = 'password' id = 'passwd' name = 'password' value={password} onChange = {handlepassword}/>
                     {error.password && <span className=' errmsg'>{error.password}</span>}
                     <Link to = '/login' className='links'>Already a member ? Click to LogIn </Link>
                </div>
                <button type =  'submit'>Submit</button>
          </form>
          ) : (
            <p>Form submitted sucessfully</p>
          )}
       </>
    </div>
  )
}

export default Register
