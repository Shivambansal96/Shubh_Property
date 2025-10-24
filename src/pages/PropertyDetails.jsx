import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Square, 
  Bed, 
  Bath, 
  Car, 
  Calendar,
  Star,
  Share2,
  Heart,
  Camera,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { properties } from '../data/properties';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const selectedProperty = properties.find(p => p.id === parseInt(id));
    setProperty(selectedProperty);
  }, [id]);

  if (!property) {
    return (
      <div className="property-details-container">
        <div className="property-not-found">
          <h2>Property not found</h2>
          <button onClick={() => navigate('/')} className="btn btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const images = [property.image, property.image, property.image]; // Using same image for demo

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="property-details-container">
      <div className="property-details-header">
        <button 
          onClick={() => navigate('/')} 
          className="back-button"
        >
          <ArrowLeft size={20} />
          Back to Properties
        </button>

        <div className="property-actions">
          <button 
            onClick={toggleFavorite} 
            className={`action-button ${isFavorite ? 'favorited' : ''}`}
          >
            <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
          <button className="action-button">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      <div className="property-details-content">
        <div className="property-gallery">
          <div className="main-image">
            <img src={images[currentImageIndex]} alt={property.name} />
            <button className="gallery-nav prev" onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>
            <button className="gallery-nav next" onClick={nextImage}>
              <ChevronRight size={24} />
            </button>
            <div className="image-counter">
              <Camera size={16} />
              <span>{currentImageIndex + 1} / {images.length}</span>
            </div>
          </div>

          <div className="thumbnail-gallery">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${property.name} ${index + 1}`}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="property-info">
          <div className="property-header">
            <div className="property-badge">
              {property.type}
            </div>
            <h1>{property.name}</h1>
            <div className="property-location">
              <MapPin size={18} />
              <span>{property.location}</span>
            </div>
            <div className="property-price">
              {formatPrice(property.price)}
            </div>
          </div>

          <div className="property-specs">
            <div className="spec-item">
              <Square size={20} />
              <div>
                <span className="spec-value">{property.size}</span>
                <span className="spec-label">Area</span>
              </div>
            </div>
            <div className="spec-item">
              <Bed size={20} />
              <div>
                <span className="spec-value">{property.bedrooms}</span>
                <span className="spec-label">Bedrooms</span>
              </div>
            </div>
            <div className="spec-item">
              <Bath size={20} />
              <div>
                <span className="spec-value">{property.bathrooms}</span>
                <span className="spec-label">Bathrooms</span>
              </div>
            </div>
            <div className="spec-item">
              <Car size={20} />
              <div>
                <span className="spec-value">{property.parking}</span>
                <span className="spec-label">Parking</span>
              </div>
            </div>
            <div className="spec-item">
              <Calendar size={20} />
              <div>
                <span className="spec-value">{property.yearBuilt}</span>
                <span className="spec-label">Year Built</span>
              </div>
            </div>
          </div>

          <div className="property-description">
            <h3>About This Property</h3>
            <p>{property.description}</p>
          </div>

          <div className="property-features">
            <h3>Features & Amenities</h3>
            <div className="features-grid">
              {property.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <Star size={16} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="property-details-info">
            <h3>Additional Information</h3>
            <div className="details-grid">
              <div className="detail-item">
                <strong>Property Type:</strong>
                <span>{property.type}</span>
              </div>
              <div className="detail-item">
                <strong>Furnished:</strong>
                <span>{property.furnished}</span>
              </div>
              <div className="detail-item">
                <strong>Year Built:</strong>
                <span>{property.yearBuilt}</span>
              </div>
              <div className="detail-item">
                <strong>Parking Spaces:</strong>
                <span>{property.parking}</span>
              </div>
            </div>
          </div>

          <div className="property-actions-section">
            <Link 
              to={`/contact/${property.id}`} 
              className="btn btn-primary btn-large"
            >
              Contact Agent
            </Link>
            <button className="btn btn-secondary btn-large">
              Schedule Tour
            </button>
          </div>
        </div>
      </div>

      <div className="similar-properties">
        <h3>Similar Properties</h3>
        <div className="similar-grid">
          {properties
            .filter(p => p.type === property.type && p.id !== property.id)
            .slice(0, 3)
            .map(similarProperty => (
              <div key={similarProperty.id} className="similar-property">
                <img src={similarProperty.image} alt={similarProperty.name} />
                <div className="similar-info">
                  <h4>{similarProperty.name}</h4>
                  <p>{similarProperty.location}</p>
                  <span className="similar-price">
                    {formatPrice(similarProperty.price)}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
