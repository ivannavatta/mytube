import React, { useState, createContext, useEffect } from 'react';

// Definir la interfaz para el contexto
interface UserContextProps {
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

// Crear el contexto con valores iniciales
export const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [login, setLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        const savedEmail = localStorage.getItem('userEmail');
        if (savedEmail) {
            setEmail(savedEmail);
        }
    }, []);
    
    return (
        <UserContext.Provider value={{ login, setLogin, email, setEmail, password, setPassword }}>
            {children}
        </UserContext.Provider>
    );
};




