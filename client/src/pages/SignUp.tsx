import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//@ts-ignore
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
//@ts-ignore
import visibilityIcon from '../assets/svg/visibilityIcon.svg' 
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth' 
import { db } from '../firebase.config'

interface FormDataProps{
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [showPassword, setSHowPassword] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormDataProps>({
    name: '',
    email: '',
    password: '',
  })
  const {name, email, password} = formData

  const navigate = useNavigate()

  const onChange = (ev:any) => {
    setFormData((prevState) => ({
      ...prevState,
      [ev.target.id]: ev.target.value,
    }))
  }

  const handleSubmit = async(ev:any) => {
    ev.preventDefault()

    try {
      const auth:any = getAuth()

      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name,
      })

      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Welcome back</p>
      </header>

      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        id="name" 
        className="nameInput" 
        placeholder="Name"
        value={name} 
        onChange={onChange}
        />

        <input 
        type="email" 
        id="email" 
        className="emailInput" 
        placeholder="Email"
        value={email} 
        onChange={onChange}
        />

        <div className="passwordInputDiv">
          <input 
          type={showPassword ? 'text' : 'password'} 
          className='passwordInput' 
          placeholder='Password' 
          id='password'
          value={password}
          onChange={onChange}
          />
          <img src={visibilityIcon} alt="showpassword" 
          className='showPassword' onClick={() => setSHowPassword((prevState) => !prevState)} />
        </div>

        <Link to= '/forgot-password' className='forgotPasswordLink'>
          Forgot Password
        </Link>

         <div className="signUpBar">
          <p className="signUpText">
            Sign Up
          </p>
          <button className="signUpButton">
            <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
          </button>
         </div>
      </form>

      {/* Google OAuth */}

      <Link to='/sign-in' className='registerLink'>
        Sign In Instead
      </Link>
    </div>
    </>
  )
}

export default SignUp