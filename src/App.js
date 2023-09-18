import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/blog/:blogId" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
