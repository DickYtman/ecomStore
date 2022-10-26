import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//@ts-ignore
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
//@ts-ignore
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

interface FormDataProps{
  email: string;
  password: string;
}

const SignIn = () => {
  const [showPassword, setSHowPassword] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormDataProps>({
    email: '',
    password: '',
  })
  const {email, password} = formData

  const navigate = useNavigate()

  const onChange = (ev:any) => {
    setFormData((prevState) => ({
      ...prevState,
      [ev.target.id]: ev.target.value,
    }))
  }

  return (
    <>
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Welcome back</p>
      </header>

      <form>
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

         <div className="signInBar">
          <p className="signInText">
            Sign In
          </p>
          <button className="signInButton">
            <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
          </button>
         </div>
      </form>

      {/* Google OAuth */}

      <Link to='/sign-up' className='registerLink'>
        Sign Up Instead
      </Link>
    </div>
    </>
  )
}

export default SignIn