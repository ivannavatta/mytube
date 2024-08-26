import React, { useContext, useState } from 'react'
import UserService from '../../../../external/services/user.service'
import LoginUserUseCase from '../../../../useCases/loginUser.useCase'
import LoginDetails from './LoginDetails'
import { Login } from '../../../../controllers/interfaces/interfaces'
import { UserContext } from '../../../../domain/context/userContext.context'
import config from '../../../../domain/config/app.config'
const { base_url } = config

interface LoginContainerProps {
  setShow: (React.Dispatch<React.SetStateAction<boolean>>)
  show: boolean
}

const LoginContainer: React.FC<LoginContainerProps> = ({ setShow, show }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const context = useContext(UserContext)

    if(!context) throw new Error('no existe el contexto')

    const { setEmail, setPassword, setLogin, email, password} = context
  
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value)
    }

    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const login: Login = {
          email,
          password
        }
        const userService = new UserService(`${base_url}`)
        const loginUseCase = new LoginUserUseCase(userService)
    
        try {
            await loginUseCase.execute(login)
            setLogin(true)
            localStorage.setItem('email', email);
            localStorage.setItem('isLoggedIn', 'true');
            
        } catch (error) {
            if(error instanceof Error){
              setErrorMessage(error.message)
            }
        }
    }
  return (
    <LoginDetails handleSubmit={handleSubmit} setEmail={handleEmailChange} setPassword={handlePasswordChange} email={email} password={password} setShow={setShow} show={show}  error={errorMessage}/>
  )
}

export default LoginContainer