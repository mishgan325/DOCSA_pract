import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, loginUser } from '../../utils/api';
import { UserContext } from '../../utils/context';
import './LoginForm.css';

const LoginForm = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const { setUser } = useContext(UserContext); // Исправлено здесь
    const navigate = useNavigate();

    const onChangeInput = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const checkValid = () => {
        const errors = [];
        if (!userData.username) errors.push('Поле с именем обязательно');
        if (!userData.password) errors.push('Поле с паролем обязательно');

        if (errors.length) {
            setError(errors.join(', '));
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!checkValid()) return;

        try {
            const res = await loginUser(userData.username, userData.password);
            if (res?.auth_token) {
                localStorage.setItem('token', res.auth_token); // Сохраняем токен
                const userRes = await getUser();
                setUser({
                    id: userRes.id,
                    username: userRes.username,
                    email: userRes.email
                });
                navigate('/', { replace: true });
            }
        } catch (err) {
            setError(
                err.non_field_errors
                    ? 'Неправильный логин или пароль'
                    : 'Ошибка сервера'
            );
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Вход</h2>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={userData.username}
                onChange={onChangeInput}
                className="form-input"
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={userData.password}
                onChange={onChangeInput}
                className="form-input"
            />
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="submit-button">
                Войти
            </button>
        </form>
    );
};

export default LoginForm;