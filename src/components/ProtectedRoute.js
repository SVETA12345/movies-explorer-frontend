import React from 'react';
import { Navigate } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRouteElement = ({ element: Component, ...props  }) => {
  console.log('loggedIn', props.loggedIn)
  return (
    props.loggedIn ? (<Component {...props} />): (<Navigate to="/" />)
)}

export default ProtectedRouteElement; 