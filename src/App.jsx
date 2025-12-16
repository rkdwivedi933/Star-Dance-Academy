import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/latout/Navbar";
import Footer from "./components/latout/Footer";

import Home from "./pages/Home";
import DanceAcademy from "./pages/DanceAcademy";

import Zumba from "./pages/Zumba";
import WeddingChoreography from "./pages/WeddingChoreography";

import Gallery from "./pages/Gallery";
import FunctionWork from "./pages/FunctionWork";

import Blog from "./pages/Blog";
import EnrollNow from "./pages/EnrollNow";
import ScrollToTop from "./components/latout/ScrollToTop";
import GoogleMapSection from "./components/enrollnow/GoogleMapSection";
import BlogInfo from "./pages/BlogInfo";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<DanceAcademy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<FunctionWork />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/zumba" element={<Zumba />} />
        <Route path="/wedding" element={<WeddingChoreography />} />

        <Route path="/enroll-now" element={<EnrollNow />} />
        <Route path="/address" element={<GoogleMapSection />} />
        <Route path="/blog-details/:id" element={<BlogInfo />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
