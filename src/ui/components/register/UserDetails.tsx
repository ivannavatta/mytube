import React from 'react'

interface UserDetailsProps {
    handleSubmit: (e: React.FormEvent) => void;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    name: string;
    lastName: string;
    email: string;
    password: string;
  }

const UserDetails: React.FC<UserDetailsProps> = ({
  handleSubmit,
  setName,
  setLastName,
  setEmail,
  setPassword,
  name,
  lastName,
  email,
  password
}) => {
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>First Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div>
      <label>Last Name:</label>
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </div>
    <div>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
    <button type="submit">Register</button>
  </form>
  )
}

export default UserDetails