import React, { useState } from 'react';
import Calendar from 'react-calendar';
cimport 'react-calendar/dist/Calendar.css';

function CalendarPage() {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Calendar Page</h2>
            <div style={{ marginTop: '20px' }}>
                <Calendar
                    onChange={handleDateChange}
                    value={date}
                    tileClassName="calendar-tile"
                />
            </div>
            <p style={{ marginTop: '20px' }}>
                Selected Date: <strong>{date.toDateString()}</strong>
            </p>
        </div>
    );
}

export default CalendarPage;