
import React, { useState } from 'react';
import SignIn from '../../routes/sign-in/SignIn';
import {getUserFromAuth, auth} from '../../ultis/firebase/firebase.util';
import {createUserWithEmailAndPassword} from 'firebase/auth';

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

  // console.log(formFields)

  //resetting the form fields
  const resetFormFileds = ()=>{
    setFormFields(defaultForm)
  }
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    if(password !== confirmPassword){
      alert("password do not match");
      return;
    }
    try {
      //authenticate user with email and password
      const {user} = await createUserWithEmailAndPassword(auth,email, password);
      await getUserFromAuth(user, { displayName});
      //calling reset formfields
      resetFormFileds();
      console.log(user)

    } catch (error) {
      //let the user know if the email already exist
      if(error.code === 'auth/email-already-in-use'){
        alert("cannot create user, email already in used");
      }else{
        console.log('user creation encounter an error', error);
      }
    }
    
    // handle form submission logic
  };

  return (
    <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
      <div className='bg-[lightgray] px-6 py-8 rounded shadow-md text-black w-full'>
      <h2 className='mb-8 text-3xl text-center'>Register</h2>
      <SignIn/>
      <form onSubmit={handleSubmit}>
        <label>displayName</label>
        <input
        className='block border border-grey-light w-full p-3 rounded mb-4' 
        type='text' 
        required
        name='displayName' 
        value={displayName} 
        onChange={handleInputChange} />

        {/* <label>Name</label>
        <input 
        className='block border border-grey-light w-full p-3 rounded mb-4' 
        type='text'
        required 
        name='name' 
        value={name} 
        onChange={handleInputChange} /> */}

        <label>email</label>
        <input 
        className='block border border-grey-light w-full p-3 rounded mb-4' 
        required
        type='email' 
        name='email' 
        value={email} 
        onChange={handleInputChange} />

        <label>password</label>
        <input 
        className='block border border-grey-light w-full p-3 rounded mb-4' 
        required
        type='password' 
        name='password' 
        value={password} 
        onChange={handleInputChange} />

        <label>confirm password</label>
        <input 
        className='block border border-grey-light w-full p-3 rounded mb-4'
        required
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
