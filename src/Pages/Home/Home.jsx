import React from "react";
import Hero from "./Hero";
import Service from "./Service";
import Ceo from "./ceo";
import Team from "./Team";


const Home = () => {
  return (
    <div className="pb-16">
      <section>
      <Hero />
      </section>

       <section className="mt-12 md:mt-20">
        <Service />
      </section>

      
      <section>
        <Ceo />
      </section>

      <section>
        <Team />
      </section>

    </div>
  );
};

export default Home;
