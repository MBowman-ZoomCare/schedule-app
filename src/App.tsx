import './App.css';
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './components/login';
import ScheduleApp from './components/scheduleApp';

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isUserAuthinticated = localStorage.getItem("isUserAuthinticated");
    return navigate(isUserAuthinticated ? '/schedule' : '/login');
  }, [navigate])

return (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/schedule" element={<ScheduleApp />} />
  </Routes>
);}

export default App;
