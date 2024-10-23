import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  return (
    <div className='addUser'>
      <h3>Sign in</h3>
      <form className='addUserForm'>
        <div className='inputGoup'>
             <label htmlFor='email' >Email:</label>
          <input 
          type="email"
          id='email'
          autoComplete='off'
          placeholder='Enter your email'
           />
             <label htmlFor='password' >Password:</label>
          <input 
          type="password"
          id='password'
          autoComplete='off'
          placeholder='Enter password'
           />
           <button type="submit" className="btn btn-primary">
            log in
            </button>
        </div>
      </form>
      <div className='login'>
        <p>Don't  have an account ?</p>
        <Link to="/" type="submit" className="btn btn-success">
          Sing up
        </Link>
      </div>
    </div>
  )
}

export default Login