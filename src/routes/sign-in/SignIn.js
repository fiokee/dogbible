import React, {useState} from 'react'
import { signWithGooglePop, getUserFromAuth, auth} from '../../ultis/firebase/firebase.util';
import { signInWithEmailAndPassword} from 'firebase/auth';

const SignIn = () => {
  const defaultForm = {
    email: '',
    password: ''
  };

  const [formFields, setFormFields] = useState(defaultForm);
  const {email, password } = formFields;

  // console.log(formFields)

  //resetting the form fields
  const resetFormFileds = ()=>{
    setFormFields(defaultForm)
  }
//signin with google
  const sigInWithGoogle = async ()=>{
    const { user } = await signWithGooglePop();
    // getting user from auth google provider to database //
      await getUserFromAuth(user);
    // console.log(user)
   }
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response)
      resetFormFileds();
    } catch (error){
      switch(error.code){
        case 'auth/wrong-password':
          alert('incorrect password for the email');
          break;
          case 'auth/user-not-found':
            alert('there is no user associated with this email');
            break;
            default:
            console.log(error);
      } 
    }
  };


  
  return (
    <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 mb-16'>
      <div className='bg-[lightgray] px-6 py-8 rounded shadow-md text-black w-full'>
        <form onSubmit={handleSubmit}>
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

        
      <button
        className='w-full text-center py-3 rounded bg-[orangered] text-white hover:bg-green-dark focus:outline-none my-1'
        type='submit'>Sign-In</button>
      <p className=' text-center m-5'>OR</p>
      <p className=' cursor-pointer m-7 text-center text-[orangered] hover:underline font-semibold'>Need an Account?</p>
      <div className=' m-auto justify-center text-center'>
      <button type='button' onClick={sigInWithGoogle} className='border- bg-slate-900 text-white justify-center'>Sign-in with Google</button>
      </div>
      </form>
      </div>
    </div>
  )
}


export default SignIn
