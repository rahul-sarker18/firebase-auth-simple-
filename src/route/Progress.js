import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Authcontext } from '../context/UserContext';

const Progress = ({children}) => {
    const {user ,loder} =useContext(Authcontext);
    if(loder){
        return <div>loding .........</div>
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default Progress;