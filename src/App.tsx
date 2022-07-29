import { Footer } from "@campgladiator/cgui-core.organisms.footer";
import "./App.scss";
import { Heading } from "@campgladiator/cgui-core.atoms.typography";
import { Views } from '@/views'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <header className="row">
        <div className="col logo">
          <img src="src/assets/campgladiator-logo.png" alt="CampGladiator Logo" width="200px"/>
        </div>
        <div className="col title">
          <Heading type="h2" variation="default" font="gotham">
            Mars Virtual Workouts
          </Heading>
        </div>
      </header>
      <main>
        <BrowserRouter>
          <Views />
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
