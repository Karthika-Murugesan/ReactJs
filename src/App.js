
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
// import NavBar from './components/NavBar';
//import TestComponent from './components/class_component';
// import FunctionalComponent from './components/FunctionalComponent';
// import PropsState from './components/PropsState';
// import State from './components/State';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import About from './components/About';
// import Work from './components/Work';
// import Contact from './components/Contact';
// import Home from './components/Home';
// import Footer from './components/Footer';
//import Use from './components/Use';
// import UseEffect from './components/UseEffect';
// import SetStatee from './components/SetStatee';
// import UseStatee from './components/UseStatee';
// import Time from './components/Time';
import LoginForm from './components/LoginForm';
import SignUp from "./components/SignUp";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <LoginForm/>
         <Routes>
             <Route path="/SignUp" element={<SignUp/>}> </Route>
         </Routes>
      </BrowserRouter>
      {/* <LoginForm/> */}
      {/* <Time/> */}
      {/* <UseStatee/> */}
     {/* <SetStatee count={0}/> */}
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
      {/* <UseEffect/> */}
      {/* <FunctionalComponent/>
     <PropsState name="karthika" age="20"/> 
     <State name="Karthika" college="KEC" dep="CSD" logo="https://www.kongu.edu/images/klogo.png"/> */}
    </div>
  );
}

export default App;
