import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Crops from "./pages/Crops";
import CropDetails from "./pages/CropDetails";
import DiseaseLibrary from "./pages/DiseaseLibrary";
import DiseaseDetails from "./pages/DiseaseDetails";
import Schemes from "./pages/Schemes";
import SchemeDetails from "./pages/SchemeDetails";
import FarmingTips from "./pages/FarmingTips";
import Profile from "./pages/Profile";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crops" element={<Crops />} />
        <Route path="/crops/:id" element={<CropDetails />} />
        <Route path="/diseases" element={<DiseaseLibrary />} />
        <Route path="/diseases/:id" element={<DiseaseDetails />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/schemes/:id" element={<SchemeDetails />} />
        <Route path="/tips" element={<FarmingTips />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;