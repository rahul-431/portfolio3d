import { BrowserRouter as Router } from "react-router-dom";
import {Navbar,Tech,Works,About,Contact,Experience,Feedbacks,Hero, StarsCanvas} from "./components";
const App = () => {
  return (
    <Router>
      <div className="bg-primary z-0 relative">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </Router>
  )
}

export default App
