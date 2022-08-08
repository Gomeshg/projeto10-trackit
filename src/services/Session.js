import {useContext, useState, createContext, useEffect} from 'react';

export const AuthContext = createContext({});


export function AuthProvider(props){

    const [session, setSession] = useState({});
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const userStorage = localStorage.getItem('session')
        if(userStorage){
            setSession(JSON.parse(userStorage))
        } 
    }, []);

    return (
        <AuthContext.Provider value={{session, setSession, percentage, setPercentage}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export const useSession = () => useContext(AuthContext);