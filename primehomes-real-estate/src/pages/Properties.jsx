import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import PropertyGrid from "../components/PropertyGrid";

export default function Properties({ properties, favourites, onToggleFavourite }) {
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");
  const [purpose, setPurpose] = useState(params.get("purpose") || "Any");
  const [type, setType] = useState("Any");
  const [maxPrice, setMaxPrice] = useState("Any");
  const filtered = useMemo(() => properties.filter(p => {
    const q = query.toLowerCase();
    return (!q || `${p.title} ${p.location} ${p.type}`.toLowerCase().includes(q))
      && (purpose === "Any" || p.purpose === purpose)
      && (type === "Any" || p.type === type)
      && (maxPrice === "Any" || p.price <= Number(maxPrice));
  }), [properties, query, purpose, type, maxPrice]);
  return <main>
    <section className="page-banner"><div className="container"><span className="eyebrow light">FIND YOUR SPACE</span><h1>Explore properties</h1><p>Discover homes and spaces in places you love.</p></div></section>
    <section className="section container listing-section">
      <div className="filter-panel">
        <div className="filter-title"><SlidersHorizontal size={18}/><strong>Find your property</strong></div>
        <label className="filter-search"><span>Search</span><div><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Location, title or keyword"/></div></label>
        <label><span>Listing type</span><select value={purpose} onChange={e=>setPurpose(e.target.value)}><option>Any</option><option>Buy</option><option>Rent</option></select></label>
        <label><span>Property type</span><select value={type} onChange={e=>setType(e.target.value)}><option>Any</option><option>House</option><option>Apartment</option><option>Duplex</option></select></label>
        <label><span>Maximum price</span><select value={maxPrice} onChange={e=>setMaxPrice(e.target.value)}><option value="Any">Any price</option><option value="5000000">₦5 million</option><option value="10000000">₦10 million</option><option value="100000000">₦100 million</option><option value="200000000">₦200 million</option></select></label>
        <button className="clear-filter" onClick={()=>{setQuery("");setPurpose("Any");setType("Any");setMaxPrice("Any");}}>Clear filters</button>
      </div>
      <div className="results-head"><div><h2>Available properties</h2><p>{filtered.length} {filtered.length === 1 ? "property" : "properties"} found</p></div><span>Showing sample listings</span></div>
      <PropertyGrid properties={filtered} favourites={favourites} onToggleFavourite={onToggleFavourite}/>
    </section>
  </main>;
}
