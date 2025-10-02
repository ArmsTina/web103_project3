import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Continent from "./pages/Continent";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/events" element={<Events></Events>}></Route>
          <Route path="/:continent" element={<Continent></Continent>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
