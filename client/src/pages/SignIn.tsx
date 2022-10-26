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

  const onChange = () => {

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
        </div>
      </form>
    </div>
    </>
  )
}

export default SignIn