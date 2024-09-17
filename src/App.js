import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LocationPage from "./components/LocationPage/LocationPage";
import locationsData from "./data/locations.json";
import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

const pageVariants = {
  initial: { opacity: 0, x: "0" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" },
};

const pageTransition = {
  duration: 0.9,
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page-transition"
    >
      {children}
    </motion.div>
  );
};

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0 }}
    >
      <img
        src="https://i.pinimg.com/originals/29/38/a3/2938a3b0772876c56082d65731c23692.gif"
        className="loading-img"
        alt="Loading transition"
      />
    </motion.div>
  );
};

const AppContent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  React.useEffect(() => {
    const handleRouteChange = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };
    handleRouteChange();
  }, [location.pathname]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <div className={`slide-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          &times;
        </button>
        <h1>Explore Pontos Turísticos</h1>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Início
            </Link>
          </li>
          {locationsData.map((location) => (
            <li key={location.id}>
              <Link to={`/location/${location.id}`} onClick={closeMenu}>
                {location.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage locations={locationsData} />
              </PageTransition>
            }
          />
          <Route
            path="/location/:id"
            element={
              <PageTransition>
                <LocationPage locations={locationsData} />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
