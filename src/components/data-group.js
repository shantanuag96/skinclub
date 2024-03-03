import "./data-group.css";
import { useState, useEffect } from "react";

const DateGroup = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = currentDateTime.toLocaleDateString(undefined, options);
   const hours = currentDateTime.getHours();
  const minutes = currentDateTime.getMinutes();
  const ampm = hours >= 12 ? 'p.m.' : 'a.m.';
  const displayHours = hours % 12 || 12;

  return (
    <header className="date-group">
      <div className="date-group-child" />
      <div className="frame-stack">
        <img
          className="skinclublogo-logotype-white-1-icon"
          loading="lazy"
          alt=""
          src="/skinclublogo-logotype-white-1@2x.png"
        />
      </div>
      <div className="content-box">
        <div className="inner-frame">
          <h3 className="sunday-20-august">{formattedDate}</h3>
        </div>
        <div className="pm">{`${displayHours}:${minutes} ${ampm}`}</div>
        <div className="line-segment">
          <div className="line-segment-child" />
          <img className="frame-icon" loading="lazy" alt="" src="/vector.svg" />
        </div>
      </div>
    </header>
  );
};

export default DateGroup;
