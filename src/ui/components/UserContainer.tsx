import React, { useState } from 'react';
import UserService from '../../external/services/user.service';
import CreateUserUseCase from '../../useCases/user.useCase';
import UserDetails from './UserDetails';
import { User } from '../../domain/entities/user.entity';


const UserContainer: React.FC = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = new User(name, lastName, email, password);
    const userService = new UserService('http://localhost:3001');
    const createUserUseCase = new CreateUserUseCase(userService);


    try {
      await createUserUseCase.execute(user);
      console.log("User registered successfully");
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <UserDetails
      handleSubmit={handleSubmit}
      setName={setName}
      setLastName={setLastName}
      setEmail={setEmail}
      setPassword={setPassword}
      name={name}
      lastName={lastName}
      email={email}
      password={password}
    />
  );
};

export default UserContainer;