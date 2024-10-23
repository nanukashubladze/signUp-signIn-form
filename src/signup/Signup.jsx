import './signup.css';

const Signup = () => {
  return (
    <div className='addUser'>
      <h3>Sign Up</h3>
      <form className='addUserForm'>
        <div className='inputGoup'>
          <label htmlFor='name' >Name:</label>
          <input 
          type="text"
          id='name'
          autoComplete='off'
          placeholder='Enter your name'
           />
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
           <button type="submit" className="btn btn-success">
            Sign Up
            </button>
        </div>
      </form>
      <div className='login'>
        <p>Already have an account ?</p>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  )
}

export default Signup