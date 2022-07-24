import { Footer } from "@campgladiator/cgui-core.organisms.footer";
import "./App.css";
import { useEffect, useState } from "react";
import { workoutsDB } from './fakeApi/index'

function App() {

  useEffect(() => {
    console.log(workoutsDB)
  }, [])

  return (
    <div className="App">
      <Footer />
    </div>
  );
}

export default App;
