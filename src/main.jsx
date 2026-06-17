import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css"; 
import Room from "./components/Room";
import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey="pk_test_cG9wdWxhci1jYXJkaW5hbC00Ni5jbGVyay5hY2NvdW50cy5kZXYk">
    <BrowserRouter>
      <Routes>
        {/* Sirf ek hi route rakho jo App component ko show kare */}
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ClerkProvider>
);