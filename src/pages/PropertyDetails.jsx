import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BedDouble, Bath, Ruler, MapPin, CheckCircle2, Heart, Phone, Mail } from "lucide-react";
const money = n => "₦" + n.toLocaleString("en-NG");
export default function PropertyDetails({ properties, favourites, onToggleFavourite }) {
  const { id } = useParams();
  const property = properties.find(p => p.id === Number(id));
  if (!property) return <main className="container section"><h2>Property not found</h2><Link to="/properties" className="text-link">Back to properties</Link></main>;
  return <main className="container section detail-page">
    <Link to="/properties" className="back-link"><ArrowLeft size={17}/> Back to properties</Link>
    <div className="detail-heading"><div><span className="eyebrow">{property.purpose} PROPERTY</span><h1>{property.title}</h1><p><MapPin size={17}/>{property.location}</p></div><div className="detail-price">{money(property.price)}{property.purpose === "Rent" && <small> / year</small>}</div></div>
    <div className="detail-gallery"><img className="gallery-main" src={property.images[0]} alt={property.title}/><div>{property.images.slice(1,3).map((img,i)=><img key={i} src={img} alt={`${property.title} view ${i+2}`}/>)}</div></div>
    <div className="detail-layout"><div className="detail-main">
      <div className="detail-stats"><span><BedDouble/>{property.beds} Bedrooms</span><span><Bath/>{property.baths} Bathrooms</span><span><Ruler/>{property.area} m²</span></div>
      <h2>About this property</h2><p className="detail-description">{property.description}</p>
      <h2>Property features</h2><div className="amenities">{property.amenities.map(item=><span key={item}><CheckCircle2 size={17}/>{item}</span>)}</div>
    </div><aside className="agent-card"><span className="eyebrow">INTERESTED IN THIS HOME?</span><h3>Let's talk about it.</h3><p>Contact the PrimeHomes team for more information about this sample listing.</p><a className="button button-primary full-button" href="tel:+2348000000000"><Phone size={17}/> Call the team</a><Link to="/contact" className="button button-outline full-button"><Mail size={17}/> Send an enquiry</Link><button className="save-detail" onClick={()=>onToggleFavourite(property.id)}><Heart size={17} fill={favourites.includes(property.id) ? "currentColor" : "none"}/>{favourites.includes(property.id) ? "Remove from saved" : "Save this property"}</button></aside></div>
  </main>;
}
