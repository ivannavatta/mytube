import React, { useState } from 'react'
import { Login } from '../../../domain/entities/user.entity'
import UserService from '../../../external/services/user.service'
import LoginUserUseCase from '../../../useCases/loginUser.useCase'
import LoginDetails from './LoginDetails'

const LoginContainer: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const login: Login = {
            email: email,
            password: password
        }
        const userService = new UserService('http://localhost:3001')
        const loginUseCase = new LoginUserUseCase(userService)
    
        try {
            await loginUseCase.execute(login)
            console.log('log in');
            
        } catch (error) {
            console.log('falla al logiarse',error);
        }
    }
  return (
    <LoginDetails handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword} email={email} password={password}/>
  )
}

export default LoginContainer