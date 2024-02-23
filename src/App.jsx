
import "../src/assets/styles/App.css";
import Home from "./components/Page/Home";
import Chara from "./components/Page/Chara";
import Servicios from "./components/Page/Servicios";
import Timecard from "./components/Page/Timecard";
import Nosotros from "./components/Page/Nosotros";
import Contact from "./components/Page/Contact";
import Footer from "./components/Footer"

function App() {

  return (
    <div className="body-all">
      <section><Home /></section>
      <section className="sec-2"><Chara /></section>
      <section className="sec-2"> <Timecard /> </section>
      <section className="sec-2"> <Servicios /> </section>
      <section className="sec-2"> <Nosotros /> </section>
      <section className="sec-3">
        <Contact />
      </section>
      <Footer />


    </div>
  )
}

export default App
