import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; // Import the theme hook

function Navbar() {
    const { toggleTheme, theme } = useTheme(); // Access theme and toggle function

    return (
        <nav
            style={{
                backgroundColor: 'var(--sidebar-bg)',
                color: 'var(--text-color)',
                padding: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <h2>Dashboard</h2>
            <ul
                style={{
                    listStyle: 'none',
                    display: 'flex',
                    gap: '15px',
                    margin: 0,
                    padding: 0,
                }}
            >
                <li>
                    <Link to="/tasks" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>
                        Tasks
                    </Link>
                </li>
                <li>
                    <Link to="/messages" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>
                        Messages
                    </Link>
                </li>
                <li>
                    <Link to="/calendar" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>
                        Calendar
                    </Link>
                </li>
            </ul>
            <button
                onClick={toggleTheme}
                style={{
                    padding: '5px 10px',
                    backgroundColor: theme === 'dark' ? '#444' : '#ddd',
                    color: theme === 'dark' ? '#fff' : '#000',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                }}
            >
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
        </nav>
    );
}

export default Navbar;
