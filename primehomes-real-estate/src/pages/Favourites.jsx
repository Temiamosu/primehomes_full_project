import { Link } from "react-router-dom";
import PropertyGrid from "../components/PropertyGrid";
export default function Favourites({ properties, favourites, onToggleFavourite }) {
  const saved = properties.filter(p => favourites.includes(p.id));
  return <main><section className="page-banner"><div className="container"><span className="eyebrow light">YOUR SHORTLIST</span><h1>Saved properties</h1><p>Keep the places you love close at hand.</p></div></section><section className="section container"><div className="results-head"><div><h2>Your favourites</h2><p>{saved.length} saved {saved.length === 1 ? "property" : "properties"}</p></div></div>{saved.length ? <PropertyGrid properties={saved} favourites={favourites} onToggleFavourite={onToggleFavourite}/> : <div className="empty-state"><h3>No saved properties yet</h3><p>Tap the heart on a property to add it to your shortlist.</p><Link to="/properties" className="button button-primary">Explore properties</Link></div>}</section></main>;
}
