import axios from "axios";
import { createContext, useContext, useEffect, useState} from "react";

interface User{
    id: string;
    name: string;
    email: string;
    role: string;
    isLoggedIn: boolean;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
    avatar: string;
    resume: string;
}

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({children} : {children : React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async() => {
            const token = localStorage.getItem('token');
            if(token){
                try{
                    const res = await axios.get('/api/me', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setUser(res.data.user);
                } catch(error){
                    localStorage.removeItem("token");
                    setUser(null);
                }
            }
        };
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    try{
        const context = useContext(UserContext);
        if (!context) {
            throw new Error('Context must be used within a UserProvider');
        }
        return context;
    } catch(error){
        throw new Error('useUser must be used within a UserProvider');
    }
}
