import React from 'react';

function Sidebar() {
    return (
        <aside style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '10px', height: '100vh' }}>
            <h3>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="#profile" style={{ textDecoration: 'none', color: '#333' }}>Profile</a></li>
                <li><a href="#settings" style={{ textDecoration: 'none', color: '#333' }}>Settings</a></li>
                <li><a href="#logout" style={{ textDecoration: 'none', color: '#333' }}>Logout</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
