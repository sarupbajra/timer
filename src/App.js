import React, { useEffect, useState } from 'react'
import './App.css';
function App() {
  const timer = () => {
  const [timeleft,setTimeLeft] = useState(60);
  useEffect (() => console.log(timeleft));
  const timer = setTimeout(() => {
    setTimeLeft=(prevTime=> prevTime-1)
  },1000);
  
  return () => clearTimeout(timer);
}, [TimeLeft];

}
export default App;