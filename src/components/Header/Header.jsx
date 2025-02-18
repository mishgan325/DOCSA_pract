import React from 'react';
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
                    <li><a href="/">Главная</a></li>
                    <li><a href="/temp1">Заглушка 1</a></li>
                    <li><a href="/temp2">Заглушка 2</a></li>
                    <li><a href="/temp3">Заглушка 3</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;