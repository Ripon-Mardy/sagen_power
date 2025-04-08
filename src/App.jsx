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

function App() {
  return (
    <div className="font-roboto">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Products />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails/>} />
          <Route path="/services" element={<Ourservices/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
