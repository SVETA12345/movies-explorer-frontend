import React from 'react';
import { Navigate } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const NoProtectedRouteElement = ({ element: Component, ...props  }) => {
  return (
    props.loggedIn===false ? Component: <Navigate to="/" replace/>
)}

export default NoProtectedRouteElement; 