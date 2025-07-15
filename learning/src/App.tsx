import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar";
import Home from "./home";

function App() {
  return (
    <Router>
      <div className="flex w-screen min-h-screen overflow-hidden bg-gradient-to-br from-purple-500 via-[#bc32ea] to-pink-600 [#a564e6]">
        <Sidebar />
        <Home />
        
        </div>
      
   


    </Router>
  );
}

export default App;

