import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Глобальные стили
import App from './App'; // Основной компонент приложения

// Создаем корневой элемент для рендеринга
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение в корневой элемент
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);