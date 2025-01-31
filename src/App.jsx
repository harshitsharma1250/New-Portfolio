import { useState, useEffect } from "react";
import Sidebar from "./components/sidebar.jsx";
import Container from "./pages/container.jsx";
import Loading from "./pages/loading.jsx";
import "react-tooltip/dist/react-tooltip.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen bg-blue-950">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Sidebar activeSection={activeSection} />
          <Container setActiveSection={setActiveSection} />
        </>
      )}
    </div>
  );
}

//#0C1137 dark
//#232C79 light
