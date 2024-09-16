import React, { useEffect } from "react";
import Header from "./Components/Header/header.jsx"
import Home from "./Components/Home/home.jsx";
import About from "./Components/About/about.jsx";
import Stack from "./Components/Stack/stack.jsx";


import Projects from "./Components/Projects/projects.jsx";
import Form from "./Components/Form/form.jsx";
import './App.css';
import Footer from "./Components/Footer/footer.jsx";

function App() {

  
  
  return (
    <div className="App">
    <Header />
    <Home />
    <About />
    <Stack />
    <Projects />
    <Form />
    <Footer />
    </div>
  );
}

export default App;