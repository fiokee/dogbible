import React from 'react'
import { signWithGoogle } from '../../ultis/firebase/firebase.util'

const SignIn = () => {
 const logUser = async ()=>{
  const response = await signWithGoogle()
  
  console.log(response)
 }
  
  return (
    <div>
      <button onClick={logUser} className='border- bg-slate-900 text-white'>Sign-in with Google</button>
    </div>
  )
}

export default SignIn
