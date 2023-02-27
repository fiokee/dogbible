
import {useState} from 'react'

const signUpForm = () => {
  
  const defaultForm = {
    displayName: '',
    name: '',
    email: '',
    password: '',
    confirmePassword: '',
  }

  // const [formFields, setFormFields]= useState(defaultForm);
  // const {displayName, name, email, password, confirmePassword} = formFields

  return (
    <div>
      Register
      <form>
      <label>displayName</label>
      <input type='text' name='displayname' value=''></input>
      <label>Name</label>
      <input type='text' name='name' value=''></input>
      <label>email</label>
      <input type='email' name='name' value=''></input>
      <label>password</label>
      <input type='password' name='name' value=''></input>
      <label>confim password</label>
      <input type='password' name='name' value=''></input>
      </form>
      <button type='submit'>SignUp</button>
    </div>
  )
}

export default signUpForm
