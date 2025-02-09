import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import RecordUser from "./pages/login-page/RecordUser";
import Login from "./pages/login-page/Login";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./routes/PrivateRoute";
import Application from "./pages/Application";
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/record" element={<RecordUser/>} />

        <Route path="/employee" element={<PrivateRoute> <Employee /></PrivateRoute>} />
        <Route path="/application" element={<PrivateRoute> <Application /></PrivateRoute>} />

      </Routes>
    </Router>
  );
}

export default App
