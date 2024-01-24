import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Metric from './components/Metric';
import Functionality from './components/Functionality';

function App() {
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Main Page Section */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />}>
            <Route index element={<Hero />} />
            <Route path="orders" element={<Metric />} />
            <Route path="integration" element={<Functionality />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

      <Hero />
      <Metric />
      <Functionality />

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
