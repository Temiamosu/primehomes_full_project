import PropertyCard from "./PropertyCard";
export default function PropertyGrid({ properties, favourites, onToggleFavourite }) {
  if (!properties.length) return <div className="empty-state"><h3>No properties found</h3><p>Try changing your search or filters.</p></div>;
  return <div className="property-grid">{properties.map(property => <PropertyCard key={property.id} property={property} isFavourite={favourites.includes(property.id)} onToggleFavourite={onToggleFavourite}/>)}</div>;
}
