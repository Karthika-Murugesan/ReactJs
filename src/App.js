
import './App.css';
// import NavBar from './components/NavBar';
//import TestComponent from './components/class_component';
import FunctionalComponent from './components/FunctionalComponent';
import PropsState from './components/PropsState';
import State from './components/State';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import About from './components/About';
// import Work from './components/Work';
// import Contact from './components/Contact';
// import Home from './components/Home';
// import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     
      {/* <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Home"element={<Home/>}></Route>
        <Route path="/About"element={<About/>}></Route>
        <Route path="/Work"element={<Work/>}></Route>
        <Route path="/Contact"element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/> */}
      <FunctionalComponent/>
     <PropsState name="karthika" age="20"/> 
     <State name="Karthika" college="KEC" dep="CSD" logo="https://www.kongu.edu/images/klogo.png"/>
    </div>
  );
}

export default App;
