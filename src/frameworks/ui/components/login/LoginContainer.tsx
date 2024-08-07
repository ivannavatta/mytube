import React, { useContext } from 'react'
import UserService from '../../../../external/services/user.service'
import LoginUserUseCase from '../../../../useCases/loginUser.useCase'
import LoginDetails from './LoginDetails'
import { Login } from '../../../../controllers/interfaces/interfaces'
import { UserContext } from '../../../../domain/context/userContext.context'


interface LoginContainerProps {
  setShow: (React.Dispatch<React.SetStateAction<boolean>>)
  show: boolean
}

const LoginContainer: React.FC<LoginContainerProps> = ({ setShow, show }) => {
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
        const userService = new UserService('http://localhost:3001')
        const loginUseCase = new LoginUserUseCase(userService)
    
        try {
            await loginUseCase.execute(login)
            console.log('log in');
            setLogin(true)
            localStorage.setItem('email', email);
            localStorage.setItem('isLoggedIn', 'true');
            
        } catch (error) {
            console.log('falla al logiarse',error);
        }
    }
  return (
    <LoginDetails handleSubmit={handleSubmit} setEmail={handleEmailChange} setPassword={handlePasswordChange} email={email} password={password} setShow={setShow} show={show}/>
  )
}

export default LoginContainer