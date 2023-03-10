import React from 'react'
import { signWithGoogle, getUserFromAuth } from '../../ultis/firebase/firebase.util'

const SignIn = () => {
 const logUser = async ()=>{
  const { user } = await signWithGoogle()

  // getting user from auth google provider to database //
  getUserFromAuth(user)
  
  // console.log(user)
 }
  
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logUser} className='border- bg-slate-900 text-white'>Sign-in with Google</button>
    </div>
  )
}


export default SignIn
