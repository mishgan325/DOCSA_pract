import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img
                    src="https://cdn-icons-png.flaticon.com/128/785/785116.png"
                    alt="Логотип"
                />
                <span className="logo-text">РКСП ПР2</span>
            </div>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/redux/checkbox">Redux и чекбокс</Link></li>
                    <li><Link to="/dialogs">Диалоги</Link></li>
                    <li><Link to="/temp2">Заглушка 2</Link></li>
                    <li><Link to="/temp3">Заглушка 3</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;