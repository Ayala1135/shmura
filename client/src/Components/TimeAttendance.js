import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';

export default function TimeAttendance() {
  const [datetime24h, setDateTime24h] = useState(null);
  const [datetime, setDateTime] = useState(null);

  return (
    <>
      <div className="card flex flex-wrap gap-3 p-fluid">
        <div className="flex-auto">
          <label htmlFor="calendar-24h" className="block mb-2" style={{fontWeight: 'bold'}}>
            שעת כניסה
          </label>
          <Calendar
            id="calendar-24h"
            value={datetime24h}
            onChange={(e1) => setDateTime24h(e1.value)}
            showTime
            p-datepicker-today
            hourFormat="24"
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="calendar" className="block mb-2" style={{fontWeight: 'bold'}}>
            שעת יציאה
          </label>
          <Calendar
            id="calendar"
            value1={datetime}
            onChange={(e) => setDateTime(e.value1)}
            showTime
            p-datepicker-today
            hourFormat="24"
          />
        </div>
      </div>
     </>
  );
}
