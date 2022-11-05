import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import OurGoal from "./components/OurGoal";
import ContactUs from "./components/ContactUs";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard";
import Map from "./components/Map";
import Usage from "./components/Usage";

function App() {
  return (
    <BrowserRouter className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/Usage" element={<Usage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
