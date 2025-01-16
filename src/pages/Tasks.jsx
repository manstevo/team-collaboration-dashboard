import React, { useState } from 'react';

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleToggleComplete = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h2>Tasks Page</h2>
            <div style={{ marginTop: '20px' }}>
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    style={{
                        padding: '10px',
                        width: '300px',
                        border: '1px solid #444',
                        borderRadius: '5px',
                        backgroundColor: '#2c2c2c',
                        color: '#fff',
                        marginRight: '10px',
                    }}
                />
                <button
                    onClick={handleAddTask}
                    style={{
                        padding: '10px 15px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                    }}
                >
                    Add Task
                </button>
            </div>
            <ul style={{ marginTop: '20px', padding: '0', listStyle: 'none' }}>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        title={task.completed ? 'Task Completed' : 'Click to Complete'} // Hover text
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px',
                            marginBottom: '10px',
                            backgroundColor: task.completed ? '#444' : '#2c2c2c',
                            color: task.completed ? '#aaa' : '#fff',
                            borderRadius: '5px',
                        }}
                    >
                        <span
                            onClick={() => handleToggleComplete(index)}
                            style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                                cursor: 'pointer',
                            }}
                        >
                            {task.text}
                        </span>
                        <button
                            onClick={() => handleDeleteTask(index)}
                            style={{
                                padding: '5px 10px',
                                backgroundColor: '#ff4d4d',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;
