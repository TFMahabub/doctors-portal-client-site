import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Loading-Spinner/Spinner';
import { AuthProvider } from '../Contexts/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthProvider)

  const location = useLocation()
  if(loading){
    return <Spinner />
  }

  if(user){
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;