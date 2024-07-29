import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./error-page";
import Hotels from "./pages/Hotels";
import About from "./pages/About";
import MyGallery from "./pages/MyGallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <>
      {/* {!loaded && <div className="loader"></div>} */}
      {!loaded && (
        <div className="w-full flex flex-col items-center justify-center absolute h-screen bg-white z-50">
          <div className="loader  "></div>
        </div>
      )}
      <Routes>
        <Route element={<Home />} errorElement={<ErrorPage />} path="/" />
        <Route
          element={<Hotels />}
          errorElement={<ErrorPage />}
          path="/hotels"
        />
        <Route element={<About />} errorElement={<ErrorPage />} path="/about" />
        <Route
          element={<MyGallery />}
          errorElement={<ErrorPage />}
          path="/gallery"
        />
        <Route element={<Blog />} errorElement={<ErrorPage />} path="/news" />
        <Route
          element={<Contact />}
          errorElement={<ErrorPage />}
          path="/contact"
        />
      </Routes>
    </>
  );
}

export default App;
