import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import EducationPage from "./pages/EducationPage.jsx";
import AnalyticsPage from "./pages/AnalyticsPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default page */}
        <Route path="/" element={<InfoPage />} />

        {/* Login page */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/dashboard" element={<AnalyticsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
