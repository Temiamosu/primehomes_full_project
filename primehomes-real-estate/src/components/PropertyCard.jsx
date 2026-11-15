import { Link } from "react-router-dom";
import { BedDouble, Bath, MoveUpRight, MapPin, Heart } from "lucide-react";

const money = (n) => "₦" + n.toLocaleString("en-NG");
export default function PropertyCard({ property, isFavourite, onToggleFavourite }) {
  return <article className="property-card">
    <div className="card-image-wrap">
      <Link to={`/properties/${property.id}`}><img src={property.image} alt={property.title} className="card-image"/></Link>
      <span className="property-tag">{property.tag}</span>
      <button className={`heart-btn ${isFavourite ? "active" : ""}`} onClick={() => onToggleFavourite(property.id)} aria-label="Toggle favourite"><Heart size={18} fill={isFavourite ? "currentColor" : "none"}/></button>
    </div>
    <div className="card-content">
      <div className="property-price">{money(property.price)} <small>{property.purpose === "Rent" ? "/ year" : ""}</small></div>
      <Link to={`/properties/${property.id}`} className="property-title">{property.title}</Link>
      <p className="property-location"><MapPin size={15}/>{property.location}</p>
      <div className="property-meta"><span><BedDouble size={16}/>{property.beds} beds</span><span><Bath size={16}/>{property.baths} baths</span><span>{property.area} m²</span></div>
      <Link to={`/properties/${property.id}`} className="card-link">View property <MoveUpRight size={16}/></Link>
    </div>
  </article>;
}
