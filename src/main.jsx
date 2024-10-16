import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "register",
    element: <RegisterPage/>,
  },
]);
function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <React.StrictMode>
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <RouterProvider router={router} />
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);