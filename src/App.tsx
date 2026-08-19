import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
      <div>
        <p className="eyebrow">404 — NÃO ACHAMOS</p>
        <h1 style={{ fontSize: "clamp(4rem, 12vw, 9rem)", margin: 0 }}>VOLTA.</h1>
        <a className="text-link" href="/">IR PRA HOME ↗</a>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/s3-fitness" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}