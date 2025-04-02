import React, {useEffect, useState} from 'react'; // Добавлен импорт useState
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ReduxCheckbox from './components/ReduxCheckbox/ReduxCheckbox';
import Temp3 from './components/Temp3';
import Dialogs from './components/Dialogs/Dialogs';
import Dialog from './components/Dialogs/Dialog';
import LoginForm from './components/LoginForm/LoginForm';
import ProtectedComponent from './components/ProtectedComponent/ProtectedComponent';
import './App.css';
import { UserContext } from './utils/context';
import * as api from "./utils/api"; // Импорт контекста

function App() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const userData = await api.getUser(); // Запрос за данными пользователя
                    setUser({
                        id: userData.id,
                        username: userData.username,
                        email: userData.email
                    });
                } catch (error) {
                    localStorage.removeItem('token');
                }
            }
            setIsLoading(false);
        };

        checkAuth();
    }, []);

    if (isLoading) {
        return <div>Загрузка...</div>; // Добавьте прелоадер
    }

    return (
        <UserContext.Provider value={{ user, setUser }}> {/* Оборачиваем в провайдер */}
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/redux/checkbox" element={<ReduxCheckbox value={"1 (это props)"} />} />
                        <Route path="/temp3" element={<Temp3 />} />
                        <Route path="/dialogs" element={<Dialogs />} />
                        <Route path="/dialogs/:id" element={<Dialog />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route
                            path="/protected"
                            element={user ? <ProtectedComponent /> : <Navigate to="/login" replace />}
                        />
                    </Routes>

                    <Footer />
                </div>
            </Router>
        </UserContext.Provider>
    );
}

export default App;