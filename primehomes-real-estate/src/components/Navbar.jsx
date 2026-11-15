import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";

export default function Navbar({ favouriteCount }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={close}><span className="brand-icon"><Home size={20}/></span>prime<span>homes.</span></Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          <NavLink to="/" onClick={close}>Home</NavLink>
          <NavLink to="/properties" onClick={close}>Properties</NavLink>
          <NavLink to="/about" onClick={close}>About us</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
          <NavLink to="/favourites" onClick={close} className="nav-fav">Saved ({favouriteCount})</NavLink>
          <Link to="/properties" className="nav-cta" onClick={close}>Explore homes <span>↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
