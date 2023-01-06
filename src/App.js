
import { Routes, Route } from "react-router-dom";
import Header from './U Deserve Best/Header';
import Lunch from "./U Deserve Best/Lunch";
import Dinner from "./U Deserve Best/Dinner";
import BreakFast from "./U Deserve Best/BreakFast";
import Main from "./Main";
import Veg from "./U Deserve Best/Component.js/Veg";
import NonVeg from "./U Deserve Best/Component.js/NonVeg";
import NavBar from './U Deserve Best/NavBar'
import Login from "./Assignment 1/Login";

function App() {
  return (
    <div className="container">
      <Header />
      <NavBar/>
      <Routes>
        <Route path='/home' element={<Main/>} />
        <Route path='/about' element={<h1>hello this is about page</h1>} />
        <Route path='/login' element={<Login/>} />
        <Route path="/breakfast" element={<BreakFast />} >
               <Route path="veg" element={<Veg/>} />
               <Route path="nonveg" element={<NonVeg/>} />
        </Route>
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner/>} />
        </Routes>
    </div>
  );
}

export default App;
