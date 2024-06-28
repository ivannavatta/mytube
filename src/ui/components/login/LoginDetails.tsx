import React from 'react'

interface LoginDetailsProps {
    handleSubmit: (e: React.FormEvent) => void;
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    email: string
    password: string
}

const LoginDetails: React.FC<LoginDetailsProps> = ({
    handleSubmit, setEmail, setPassword, email, password
}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
    </form>
  )
}

export default LoginDetails