import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Temp1 from './components/Temp1';
import Temp2 from './components/Temp2';
import Temp3 from './components/Temp3';

import Dialogs from './components/Dialogs/Dialogs';
import Dialog from './components/Dialogs/Dialog';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/temp1" element={<Temp1 value={"1 (это props)"} />} />
                    <Route path="/temp2" element={<Temp2 />} />
                    <Route path="/temp3" element={<Temp3 />} />
                    <Route path="/dialogs" element={<Dialogs />} />
                    <Route path="/dialogs/:id" element={<Dialog />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;