import { Footer } from "@campgladiator/cgui-core.organisms.footer";
import "./App.scss";
import { useEffect, useState } from "react";
import { workoutsDB } from "./fakeApi/index";
import { Logo } from "@campgladiator/cgui-core.atoms.logo";
import { Heading } from "@campgladiator/cgui-core.atoms.typography";


function App() {
  useEffect(() => {
    console.log(workoutsDB);
  }, []);

  return (
    <div className="page">
      <header className="row">
        <div className="col logo">
          <img src="src/assets/campgladiator-logo.png" alt="CampGladiator Logo" width="200px"/>
        </div>
        <div className="col title">
          <Heading type="h3" variation="default" font="gotham">
            Mars Virtual Workouts
          </Heading>
        </div>
          {/* <Logo type="full" width="200px" fullType="red-white"/> */}
      </header>
      <main></main>
      <Footer />
    </div>
  );
}

export default App;
