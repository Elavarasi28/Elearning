import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar";
import Home from "./home";
ssh-keygen -t ed25519 -c 

function App() {
  return (
    <Router>
      <div className="flex w-screen min-h-screen overflow-hidden bg-gradient-to-br from-purple-400 via-pink-400 to-[#a15ee3]">
        <Sidebar />
        <Home />
        
        </div>
      
   


    </Router>
  );
}

export default App;

