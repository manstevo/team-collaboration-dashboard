import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Tasks from './pages/Tasks';
import Messages from './pages/Messages';
import Calendar from './pages/Calendar';


function App() {
    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <Navbar />
                <div style={{ display: 'flex', flex: 1 }}>
                    <Sidebar />
                    <main>
                        <Routes>
                            <Route path="/" element={<h1>Welcome to the Team Collaboration Dashboard</h1>} />
                            <Route path="/tasks" element={<Tasks />} />
                            <Route path="/messages" element={<Messages />} />
                            <Route path="/calendar" element={<Calendar />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;
