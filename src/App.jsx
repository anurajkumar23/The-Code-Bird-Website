import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import "./index.css";

import Footer from "./components/Footer/Footer";
import HomePages from "./components/Homepages/HomePages";
import AboutUs from "./Component/Aboutus/AboutUs";
import FAQComponent from "./components/FAQS/FAQComponent";
import Team from "./components/Team";
import Eventpg from "./components/Eventpg";
import Register from "./components/Register/Register";
import Advisor from "./components/Advisor/Advisor";
import Founders from "./components/CodebirdTeamMegaNav/Founders";
import OurStory from "./components/CodebirdTeamMegaNav/OurStory";
import DevTeam from "./components/CodebirdTeamMegaNav/DevTeam";
import WebDev from "./components/Domains/WebDev";
import AndroidDev from "./components/Domains/AndroidDev";
function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faQs" element={<FAQComponent />} />
            <Route path="/team" element={<Team />} />
            <Route path="/event" element={<Eventpg />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/devteam" element={<DevTeam />} />
            <Route path="/advisor" element={<Advisor />} />
            <Route path="/webdev" element={<WebDev />} />
            <Route path="/androiddev" element={<AndroidDev />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
