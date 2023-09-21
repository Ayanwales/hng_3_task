import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
        />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
