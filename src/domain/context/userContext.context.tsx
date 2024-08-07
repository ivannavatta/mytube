import React, { useState, createContext, useEffect } from 'react';

interface UserContextProps {
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    logout: () => void
}


export const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [login, setLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        const savedLoginStatus = localStorage.getItem('isLoggedIn');
    
        if (savedEmail && savedLoginStatus === 'true') {    
          setEmail(savedEmail);
          setLogin(true);
        }
      }, []);

        const logout = () => {
        setEmail('');
        setLogin(false);
        localStorage.removeItem('email');
        localStorage.removeItem('isLoggedIn');
      };
    
    return (
        <UserContext.Provider value={{ login, setLogin, email, setEmail, password, setPassword, logout }}>
            {children}
        </UserContext.Provider>
    );
};




