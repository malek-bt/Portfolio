import "./App.css";
import HeaderInfo from "./component/header-info";
import About from "./component/about";
import NavBar from "./component/Nav";
import SocialApp from "./component/SocialApp";
import Work from "./component/work";
import Skills from "./component/skills";
import Contact from "./component/contact";

function App() {
  return (
    <main className="App">
      <NavBar />
       <SocialApp />
      <HeaderInfo />
      <About /> 
      <Work />
       <Skills/>
      <Contact /> 
    </main>
  );
}

export default App;
