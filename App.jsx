import "./App.css";
import Contact from "./src/sections/Contact/Contact";
import Footer from "./src/sections/Footer/Footer";
import Hero from "./src/sections/Hero/Hero";
import Navbar from "./src/sections/Navbar/Navbar";
import Projects from "./src/sections/Projects/Projects";
import Skills from "./src/sections/Skills/Skills";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
