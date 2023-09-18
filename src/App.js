import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Blog from "./pages/blog/Blog";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Layout><Dashboard /></Layout>} />
        <Route exact path="/blog/:blogId" element={<Layout><Blog /></Layout>} />
      </Routes>
    </div>
  );
}

export default App;
