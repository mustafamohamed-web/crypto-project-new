import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Market from "./components/Market";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/market" element={<Market />} />
        <Route path="/sign up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
