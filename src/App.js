import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Careers } from "./components/Careers";
import { Contactus } from "./components/Contactus";
import "../src/App.css";
import { Serv1 } from "./components/Serv1";
import { Footer } from "./components/Fooeter";
import { Redhat } from "./components/Redhat";
import { Salesforce } from "./components/Salesforce";
import { Postersql } from "./components/Postersql";
import { Inforamatica } from "./components/Inforamatica";
import { Webdeveloment } from "./components/Webdeveloment";
import { Onsite } from "./components/Onsite";
import { Online } from "./components/Online";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/abou" element={<About />}></Route>
          <Route path="/cont" element={<Contactus />}></Route>
          <Route path="/care" element={<Careers />}></Route>
          <Route path="/serv1" element={<Serv1 />}></Route>
          <Route path="/red" element={<Redhat />}></Route>
          <Route path="/salesforce" element={<Salesforce />}></Route>
          <Route path="/post" element={<Postersql />}></Route>
          <Route path="/info" element={<Inforamatica />}></Route>
          <Route path="/salesforce" element={<Salesforce />}></Route>
          <Route path="/post" element={<Postersql />}></Route>
          <Route path="/web" element={<Webdeveloment />}></Route>
          <Route path="/online" element={<Online />}></Route>
          <Route path="/onsite" element={<Onsite />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
