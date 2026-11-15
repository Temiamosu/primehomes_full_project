import { Link } from "react-router-dom";
import { Home, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div><Link to="/" className="brand footer-brand"><span className="brand-icon"><Home size={20}/></span>prime<span>homes.</span></Link><p>Helping you find a place that feels like home.</p></div>
      <div><h4>Explore</h4><Link to="/properties">Properties</Link><Link to="/about">About us</Link><Link to="/contact">Contact</Link></div>
      <div><h4>Get in touch</h4><p><MapPin size={15}/> Lagos, Nigeria</p><p><Phone size={15}/> +234 800 000 0000</p><p><Mail size={15}/> hello@primehomes.example</p></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} PrimeHomes. Student demonstration project.</span><span>Find your place. Start your story.</span></div>
  </footer>;
}
