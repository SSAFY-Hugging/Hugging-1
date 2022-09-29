import React, { useState } from 'react';
import Calendar, { MonthView } from 'react-calendar';
import styles from './Calendargrass.module.css';
// import 'react-calendar/dist/Calendar.css';
// import '.;
import axios from 'axios'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import moment from "moment"

function MyCalendar() {
  const [value, onChange] = useState(new Date());
  
  // const [mark, setMark] = useState([]);
  // const now = new Date();
  // const month = now.getMonth();

  const marks = [

  ];
//   const [mark, setMark] = useState([]);

//   const { data } = useQuery(

//     ["logDate", month],
//     async () => {
//       const result = await axios.get(
//         `/api/healthLogs?health_log_type=DIET`
//       );
//       return result.data;
//     },
//     {
//       onSuccess: (data: any) => {
//         setMark(data);

//       },
//     }
//   );
  return (
    <>
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        locale="en-EN"
        tileClassName={({ date, view }) => {
          if (marks.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return "highlight";
          }
        }}
      />
    </div>
    <div>
      {moment(value).format("YYYY-MM-DD")} 
    </div>
    
    </>

  );
  
}
export default MyCalendar;