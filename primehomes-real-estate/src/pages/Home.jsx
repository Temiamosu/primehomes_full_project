import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ArrowUpRight, ShieldCheck, KeyRound, Headset, ArrowRight } from "lucide-react";
import PropertyGrid from "../components/PropertyGrid";

export default function Home({ properties, favourites, onToggleFavourite }) {
  const [keyword, setKeyword] = useState("");
  const [purpose, setPurpose] = useState("Any");
  const navigate = useNavigate();
  const featured = properties.filter(p => p.featured);
  function search(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("q", keyword.trim());
    if (purpose !== "Any") params.set("purpose", purpose);
    navigate(`/properties?${params.toString()}`);
  }
  return <>
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow light">YOUR NEXT CHAPTER STARTS HERE</span>
          <h1>Find a place<br/>to <em>call home.</em></h1>
          <p>Thoughtfully selected homes and spaces to help you live the life you imagine.</p>
          <form className="hero-search" onSubmit={search}>
            <label><span>Location or keyword</span><input value={keyword} onChange={e=>setKeyword(e.target.value)} placeholder="Try Lekki, Ikeja, apartment..."/></label>
            <label><span>I'm looking to</span><select value={purpose} onChange={e=>setPurpose(e.target.value)}><option>Any</option><option>Buy</option><option>Rent</option></select></label>
            <button type="submit" aria-label="Search properties"><Search size={20}/></button>
          </form>
          <div className="hero-note"><span className="avatar-stack">●●●</span> Helping people find their place in Lagos</div>
        </div>
        <div className="hero-visual">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90" alt="Modern home with warm, spacious interior"/>
          <div className="floating-note"><span className="note-dot"></span><div><strong>Find your kind of space</strong><small>Homes selected with care</small></div></div>
        </div>
      </div>
      <div className="hero-shape"></div>
    </section>
    <section className="section container">
      <div className="section-heading"><div><span className="eyebrow">A PLACE FOR EVERY STORY</span><h2>Featured properties</h2><p>Explore a few places we think you’ll love.</p></div><Link className="text-link" to="/properties">View all properties <ArrowUpRight size={17}/></Link></div>
      <PropertyGrid properties={featured} favourites={favourites} onToggleFavourite={onToggleFavourite}/>
    </section>
    <section className="benefits-section"><div className="container"><div className="section-heading centered"><div><span className="eyebrow">THE PRIMEHOMES DIFFERENCE</span><h2>A simpler way to find home</h2><p>We make each step feel clear, considered and straightforward.</p></div></div><div className="benefit-grid">
      <div className="benefit"><span><ShieldCheck/></span><h3>Listings with care</h3><p>Explore a curated sample of properties with useful details in one place.</p></div>
      <div className="benefit"><span><KeyRound/></span><h3>Spaces for your needs</h3><p>Browse different property types and find the features that matter to you.</p></div>
      <div className="benefit"><span><Headset/></span><h3>Helpful support</h3><p>Reach out through our contact form to ask questions about a listing.</p></div>
    </div></div></section>
    <section className="bottom-cta container"><div><span className="eyebrow light">LET'S FIND YOUR PLACE</span><h2>Your next move<br/>could start here.</h2></div><Link to="/properties" className="button button-light">Browse properties <ArrowRight size={18}/></Link></section>
  </>;
}
