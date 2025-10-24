import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyList.css';

const PropertyList = ({ properties, loading, error }) => {
  if (loading) {
    return (
      <div className="property-list-loading">
        <div className="loading-spinner"></div>
        <p>Loading properties...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="property-list-error">
        <p>Error loading properties: {error}</p>
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="property-list-empty">
        <div className="empty-state">
          <h3>No Properties Found</h3>
          <p>Try adjusting your search criteria or filters to find more properties.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="property-list">
      <div className="property-list-header">
        <h2>Available Properties</h2>
        <p>{properties.length} properties found</p>
      </div>
      
      <div className="property-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
