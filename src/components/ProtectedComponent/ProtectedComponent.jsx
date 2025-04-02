// components/ProtectedComponent/ProtectedComponent.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../utils/context';
import './ProtectedComponent.css';

const ProtectedComponent = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="protected-container">
            <h1>Защищенная страница</h1>
            <div className="user-info">
                <h2>Информация о пользователе:</h2>
                <p>ID: {user.id}</p>
                <p>Имя пользователя: {user.username}</p>
                {user.email && <p>Email: {user.email}</p>}
                <p>Статус: Авторизован</p>
            </div>
        </div>
    );
};

export default ProtectedComponent;