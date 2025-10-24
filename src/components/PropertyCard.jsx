import { Bath, Bed, Car, MapPin, Square } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="property-card">
      <div className="property-image-container">
        <img 
          src={property.image} 
          alt={property.name}
          className="property-image"
          loading="lazy"
        />
        <div className="property-type-badge">
          {property.type}
        </div>
        {/* <div className="property-price-overlay">
          {formatPrice(property.price)}
        </div> */}                                
      </div>
      
      <div className="property-content">
        <h3 className="property-name">{property.name}</h3>
        
        <div className="property-location">
          <MapPin size={16} />
          <span>{property.location}</span>
        </div>

        <div className="property-details">
          <div className="detail-item">
            <Square size={16} />
            <span>{property.size}</span>
          </div>
          <div className="detail-item">
            <Bed size={16} />
            <span>{property.bedrooms}</span>
          </div>
          <div className="detail-item">
            <Bath size={16} />
            <span>{property.bathrooms}</span>
          </div>
          <div className="detail-item">
            <Car size={16} />
            <span>{property.parking}</span>
          </div>
        </div>

        <p className="property-description">
          {property.description.substring(0, 120)}...
        </p>

        <div className="property-features">
          {property.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="feature-tag">
              {feature}
            </span>
          ))}
        </div>

        <div className="property-actions">
          <Link 
            to={`/contact/${property.id}`} 
            className="btn btn-primary"
          >
            Contact Agent
          </Link>
          {/* <Link 
            to={`/property/${property.id}`} 
            className="btn btn-secondary"
          >
            View Details
          </Link> */} 
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
