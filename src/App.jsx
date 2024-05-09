import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
