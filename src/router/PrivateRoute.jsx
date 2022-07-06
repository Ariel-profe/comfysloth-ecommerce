import { useContext } from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import { UserContext } from '../context';

//children es un arreglo de componentes
//Navigate es un componente especial q permite navegar a cualquier ruta
export const PrivateRoute = ({children, ...rest}) => {

    const { myUser } = useContext(UserContext);

    return myUser ? children : <Navigate to='/' />
}


