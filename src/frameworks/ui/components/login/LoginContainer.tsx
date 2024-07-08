import React, { useState } from 'react'
import { Login } from '../../../../domain/entities/user.entity'
import UserService from '../../../../external/services/user.service'
import LoginUserUseCase from '../../../../useCases/loginUser.useCase'
import LoginDetails from './LoginDetails'


interface LoginContainerProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
  setShow: (React.Dispatch<React.SetStateAction<boolean>>)
  email: string
  password: string
  show: boolean
}

const LoginContainer: React.FC<LoginContainerProps> = ({ setShow, show, setLogin, setEmail, setPassword, email, password }) => {
  
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value)
    }

    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const login = new Login(email, password)
        const userService = new UserService('http://localhost:3001')
        const loginUseCase = new LoginUserUseCase(userService)
    
        try {
            await loginUseCase.execute(login)
            console.log('log in');
            setLogin(true)
            
        } catch (error) {
            console.log('falla al logiarse',error);
        }
    }
  return (
    <LoginDetails handleSubmit={handleSubmit} setEmail={handleEmailChange} setPassword={handlePasswordChange} email={email} password={password} setShow={setShow} show={show}/>
  )
}

export default LoginContainer