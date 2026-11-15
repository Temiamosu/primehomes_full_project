import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { properties as propertyData } from "./data/properties";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Favourites from "./pages/Favourites";

export default function App() {
  const [favourites, setFavourites] = useState(() => {
    try { return JSON.parse(localStorage.getItem("primehomes-favourites")) || []; }
    catch { return []; }
  });
  useEffect(() => { localStorage.setItem("primehomes-favourites", JSON.stringify(favourites)); }, [favourites]);
  const toggleFavourite = id => setFavourites(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  return <><ScrollToTop/><Navbar favouriteCount={favourites.length}/><Routes>
    <Route path="/" element={<Home properties={propertyData} favourites={favourites} onToggleFavourite={toggleFavourite}/>}/>
    <Route path="/properties" element={<Properties properties={propertyData} favourites={favourites} onToggleFavourite={toggleFavourite}/>}/>
    <Route path="/properties/:id" element={<PropertyDetails properties={propertyData} favourites={favourites} onToggleFavourite={toggleFavourite}/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/favourites" element={<Favourites properties={propertyData} favourites={favourites} onToggleFavourite={toggleFavourite}/>}/>
    <Route path="*" element={<main className="container section"><h2>Page not found</h2><a href="/">Return home</a></main>}/>
  </Routes><Footer/></>;
}
