import React, { useState } from 'react';

const SignUpForm = () => {
  const defaultForm = {
    displayName: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formFields, setFormFields] = useState(defaultForm);
  const { displayName, name, email, password, confirmPassword } = formFields;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic
  };

  return (
    <div className='ontainer max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
      <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
      <h2 className='mb-8 text-3xl text-center'>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>displayName</label>
        <input
        className='block border border-grey-light w-full p-3 rounded mb-4' 
        type='text' 
        name='displayName' 
        value={displayName} 
        onChange={handleInputChange} />

        <label>Name</label>
        <input 
        className='block border border-grey-light w-full p-3 rounded mb-4' 
        type='text' 
        name='name' 
        value={name} 
        onChange={handleInputChange} />

        <label>email</label>
        <input 
        className='block border border-grey-light w-full p-3 rounded mb-4' 
        type='email' 
        name='email' 
        value={email} 
        onChange={handleInputChange} />

        <label>password</label>
        <input 
        className='block border border-grey-light w-full p-3 rounded mb-4' 
        type='password' 
        name='password' 
        value={password} 
        onChange={handleInputChange} />

        <label>confirm password</label>
        <input 
        className='block border border-grey-light w-full p-3 rounded mb-4' 
        type='password' 
        name='confirmPassword' 
        value={confirmPassword} 
        onChange={handleInputChange} />
        <button 
        className='w-full text-center py-3 rounded bg-[orangered] text-white hover:bg-green-dark focus:outline-none my-1'
        type='submit'>Sign Up</button>
      </form>

      </div>
    </div>
  );
};

export default SignUpForm;
