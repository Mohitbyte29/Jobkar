import axios from "axios";
import {React, createContext, useEffect, useState} from "react";

interface User{
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    avatar: string;
    resume: string;
}

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
};

export const UsersContext = React.createContext<UserContextType | undefined>(undefined);

export const UsersProvider = ({children} : {children : React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async() => {
            const token = localStorage.getItem('token');
            if(token){
                try{
                    const res = await axios.get('/api/')
                }
            }
        }
    }) 

    return (
        <UsersContext.Provider value={{ user, setUser }}>
            {children}
        </UsersContext.Provider>
    );
};

const UserContext = () => {

  return (
    <div>
        
    </div>
  )
}

export default UserContext
