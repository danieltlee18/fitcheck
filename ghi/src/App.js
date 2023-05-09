import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard.js";
import Graphic from "./Graphic/Graphic.js";
import Rate from "./Rate/Rate.js";
import Login from "./Login/Login";
import Signup from "./Signup/signup";
import CreateOutfit from "./CreateOutfit/CreateOutfit";
import UserOutfits from "./UserOutfits/UserOutfits";

function App() {
    //   const domain = /https:\/\/[^/]+/;
    //   const basename = process.env.PUBLIC_URL.replace(domain, "");
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Graphic />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/rate" element={<Rate />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/createoutfit" element={<CreateOutfit />}></Route>
            <Route path="/outfits" element={<UserOutfits />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
