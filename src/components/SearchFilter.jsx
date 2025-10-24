import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import './SearchFilter.css';

const SearchFilter = ({ onSearch, onFilter, properties }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: 'All',
    location: 'All',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: ''
  });

  const propertyTypes = ["All", "Villa", "Apartment", "House", "Condo", "Townhouse", "Brownstone"];
  const locations = ["All", "Beverly Hills, CA", "Manhattan, NY", "Austin, TX", "Miami Beach, FL", "Seattle, WA", "Brooklyn, NY"];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      type: 'All',
      location: 'All',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: ''
    };
    setFilters(clearedFilters);
    setSearchTerm('');
    onFilter(clearedFilters);
    onSearch('');
  };

  return (
    <div className="search-filter-container">
      <div className="search-section">
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-group">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search by property name, location, or features..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="filter-section">
        <div className="filter-header">
          <SlidersHorizontal size={20} />
          <span>Filters</span>
          <button onClick={clearFilters} className="clear-filters-btn">
            Clear All
          </button>
        </div>

        <div className="filter-grid">
          <div className="filter-group">
            <label>Property Type</label>
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="filter-select"
            >
              {propertyTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Location</label>
            <select
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="filter-select"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Min Price</label>
            <input
              type="number"
              placeholder="Min Price"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              className="filter-input"
            />
          </div>

          <div className="filter-group">
            <label>Max Price</label>
            <input
              type="number"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              className="filter-input"
            />
          </div>

          <div className="filter-group">
            <label>Bedrooms</label>
            <select
              value={filters.bedrooms}
              onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
              className="filter-select"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Bathrooms</label>
            <select
              value={filters.bathrooms}
              onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
              className="filter-select"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
