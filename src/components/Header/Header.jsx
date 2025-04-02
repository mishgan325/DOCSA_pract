import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { UserContext } from "../../utils/context";

function Header() {
    // Добавляем проверку на существование контекста
    const context = useContext(UserContext);

    // Деструктурируем с значениями по умолчанию
    const { user = null, setUser = () => {} } = context || {};

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <header className="header">
            <Link to="/">
                <div className="header-logo">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/785/785116.png"
                        alt="Логотип"
                    />
                    <span className="logo-text">РКСП ПР6</span>
                </div>
            </Link>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/redux/checkbox">Redux и чекбокс</Link></li>
                    <li><Link to="/dialogs">Диалоги</Link></li>
                    <li><Link to="/protected">Инфо об пользователе</Link></li>
                    <li><Link to="/temp3">Заглушка 3</Link></li>
                </ul>
            </nav>
            {/* Добавляем блок авторизации */}
            <div className="auth-section">
                {user ? (
                    <button onClick={handleLogout} className="logout-button">
                        Выйти
                    </button>
                ) : (
                    <Link to="/login" className="login-button">
                        Войти
                    </Link>
                )}
            </div>
        </header>
    );
}

export default Header;