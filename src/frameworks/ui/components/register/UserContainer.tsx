import React, { useState } from 'react';
import UserService from '../../../../external/services/user.service';
import CreateUserUseCase from '../../../../useCases/createUser.useCase';
import UserDetails from './UserDetails';
import { User } from '../../../../domain/entities/user.entity';
import config from '../../../../domain/config/app.config'
const { base_url } = config
interface UserContainerProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
}
const UserContainer: React.FC<UserContainerProps> = ({ setShow, show }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string; }>({});

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
    const userService = new UserService(`${base_url}`);
    const createUserUseCase = new CreateUserUseCase(userService);


    try {
      await createUserUseCase.execute(user);
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message;
        const newErrors: { [key: string]: string } = {};
        if (errorMessage.includes("nombre")) newErrors.name = errorMessage;
        if (errorMessage.includes("apellido")) newErrors.lastName = errorMessage;
        if (errorMessage.includes("contraseña")) newErrors.password = errorMessage;
        if (errorMessage.includes("correo electrónico")) newErrors.email = errorMessage;
        setErrors(newErrors);
      } else {
        setErrors({ general: "An unknown error occurred" });
      }
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
      errors={errors}
    />
  );
};

export default UserContainer;