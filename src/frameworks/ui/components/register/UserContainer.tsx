import React, { useState } from 'react';
import UserService from '../../../../external/services/user.service';
import CreateUserUseCase from '../../../../useCases/createUser.useCase';
import UserDetails from './UserDetails';
import { User } from '../../../../domain/entities/user.entity';

interface UserContainerProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
}
const UserContainer: React.FC<UserContainerProps> = ({ setShow, show }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

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
      setShow={setShow}
      show={show}
      handleSubmit={handleSubmit}
      setName={handleNameChange}
      setLastName={handleLastNameChange}
      setEmail={handleEmailChange}
      setPassword={handlePasswordChange}
      name={name}
      lastName={lastName}
      email={email}
      password={password}
    />
  );
};

export default UserContainer;