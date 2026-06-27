import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import Register from "./Components/Auth/Register.jsx";
import { Toaster } from "react-hot-toast";
import Login from "./Components/Auth/Login.jsx";
import Home from "./Pages/Home/Home.jsx";
import AdminDashboard from "./Components/Admin/AdminDashboard.jsx";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-account" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}
export default App;
