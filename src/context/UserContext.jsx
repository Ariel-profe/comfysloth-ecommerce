import { createContext, useState } from "react";
import {useAuth0} from '@auth0/auth0-react';
import { Loading } from "../components/ui/Loading";
import { useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const {isLoading, isAuthenticated, loginWithRedirect, logout, user ,error} = useAuth0();

    const [myUser, setMyUser] = useState(null)

    useEffect(() => {
        if(isAuthenticated){
            setMyUser(user)
        }else{
            setMyUser(false)
        }
    }, [isAuthenticated])
    
    if(isLoading)(
        <Loading />
    );




    return (
        <UserContext.Provider value={{myUser, loginWithRedirect, logout}}>
            {children}
        </UserContext.Provider>
    )
};