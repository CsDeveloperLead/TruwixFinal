import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage.jsx";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navigation can go here */}
        <Routes>
          {/* Route Definitions */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
