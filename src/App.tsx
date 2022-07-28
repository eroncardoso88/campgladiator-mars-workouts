import { Footer } from "@campgladiator/cgui-core.organisms.footer";
import "./App.scss";
import { useEffect, useState } from "react";
import { workoutsDB } from './fakeApi/index'

function App() {

  useEffect(() => {
    console.log(workoutsDB)
  }, [])

  return (
    <div>
      <Footer />
    </div>
  );
}

export default App;
