import { Header } from "./components/Header";
import { Home } from "./components/Home";
import Cookies from "./pages/Cookies";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookieProvider } from "./contexts/CookieContext";

function App() {
  return (
    <CookieProvider>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </CookieProvider>
  );
}

export default App;
