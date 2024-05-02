import React from "react";

import "../components/App.css";
import "../index.css";
import Header from "./Header/Header.jsx";
import Hero from "./Hero/Hero.jsx";
import ContainerOne from "../Containers/ContainerOne.jsx";
import ContainerTwo from "../Containers/ContainerTwo.jsx";
import Service from "../components/Service/Service.jsx";
import ServiceTwo from "../components/Service/ServiceTwo.jsx";
import Contact from "./Contact/Contact.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //   });
  // }, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section className="section-hero">
          <Hero />
        </section>
        <section className="section-container-1">
          <ContainerOne />
        </section>
        <section className="section-container-2" id="containerTwo">
          <ContainerTwo />
        </section>
        <section className="section-service" id="service">
          <Service />
        </section>
        <section className="section-service" id="sericeTwo">
          <ServiceTwo />
        </section>
        <section className="section-contact" id="contact">
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
