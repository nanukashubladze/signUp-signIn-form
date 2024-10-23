import { useState, useEffect } from 'react';
import './signup.css';
import { Link } from "react-router-dom";

const Signup = () => {
  const initialValue = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/; // New regex for username validation

    if (!values.username) {
      errors.username = "Username is required!";
    } else if (!usernameRegex.test(values.username)) {
      errors.username = "Don't use punctuation marks and it must contain 3-16 characters!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters!";
    }

    return errors;
  };

  return (
    <div className='addUser'>
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit} className='addUserForm'>
        <div className='inputGroup'>
          <label htmlFor='username'>Name:</label>
          <input
            type="text"
            id='username'
            name='username'
            autoComplete='off'
            placeholder='Enter your name'
            value={formValues.username}
            onChange={handleChange}
          />
          <p>{formErrors.username}</p>

          <label htmlFor='email'>Email:</label>
          <input
            type="email"
            id='email'
            name='email'
            autoComplete='off'
            placeholder='Enter your email'
            value={formValues.email}
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>

          <label htmlFor='password'>Password:</label>
          <input
            type="password"
            id='password'
            name='password'
            autoComplete='off'
            placeholder='Enter password'
            value={formValues.password}
            onChange={handleChange}
          />
          <p>{formErrors.password}</p>

          <button type="submit" className="btn btn1 btn-success">
            Sign Up
          </button>
        </div>
      </form>
      <div className='login'>
        <p className='quest'>Already have an account?</p>
        <Link to="/login" className="btn btn2 btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
