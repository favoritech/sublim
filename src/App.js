import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
