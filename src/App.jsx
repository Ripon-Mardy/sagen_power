import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Ourservices from "./components/Ourservices";
import BannerBottom from "./components/BannerBottom";
import Services from "./components/Services";
import WorkTogether from "./components/WorkTogether";
import ClientsCounts from "./components/ClientsCounts";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="font-openSans">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <BannerBottom/>
                <Services/>
                <WorkTogether/>
              </>
            }
          />
          <Route path="/about" element={
            <>
            <About />
            <ClientsCounts/>
            </>
            } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/services" element={<Ourservices/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
