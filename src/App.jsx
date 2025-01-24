import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage.jsx";
import Contact from "./Pages/Contact.jsx";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navigation can go here */}
        <Routes>
          {/* Route Definitions */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
