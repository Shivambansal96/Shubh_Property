import {
  ArrowRight,
  Award,
  Home,
  MapPin,
  Play,
  Search,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import play_video from '../assets/hero_section_Video.mp4';
import PropertyList from '../components/PropertyList';
import SearchFilter from '../components/SearchFilter';
import { properties } from '../data/properties';
import './HomePage.css';

const HomePage = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredProperties(properties);
      return;
    }

    const filtered = properties.filter(property =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.features.some(feature => 
        feature.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredProperties(filtered);
  };

  const handleFilter = (filters) => {
    let filtered = properties;

    if (filters.type !== 'All') {
      filtered = filtered.filter(property => property.type === filters.type);
    }

    if (filters.location !== 'All') {
      filtered = filtered.filter(property => property.location === filters.location);
    }

    if (filters.minPrice) {
      filtered = filtered.filter(property => property.price >= parseInt(filters.minPrice));
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(property => property.price <= parseInt(filters.maxPrice));
    }

    if (filters.bedrooms) {
      filtered = filtered.filter(property => property.bedrooms >= parseInt(filters.bedrooms));
    }

    if (filters.bathrooms) {
      filtered = filtered.filter(property => property.bathrooms >= parseInt(filters.bathrooms));
    }

    setFilteredProperties(filtered);
  };

  const featuredProperties = properties.slice(0, 3);
  const stats = [
    { icon: <Home size={24} />, number: "500+", label: "Properties Sold" },
    { icon: <Users size={24} />, number: "1000+", label: "Happy Clients" },
    { icon: <Award size={24} />, number: "15+", label: "Years Experience" },
    { icon: <Star size={24} />, number: "4.9/5", label: "Client Rating" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      {/* <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Find Your Dream Home</h1>
          <p>Discover premium properties in the most desirable locations. 
             From luxury villas to modern apartments, we have the perfect home for you.</p>
          
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <button className="btn btn-primary btn-large">
              <Search size={20} />
              Explore Properties
            </button>
            <button onClick={()=> {

              return (
                <video src={play_video}></video>
              )
            }} className="btn btn-secondary btn-large">
              <Play size={20} />
              Watch Video
            </button>
          </div>
        </div>
      </section> */}

      <section className="hero-section">
  {/* 🔹 Video Background */}
  <video
    className="hero-video"
    src={play_video}
    autoPlay
    loop
    muted
    playsInline
  ></video>

  {/* Overlay for text readability */}
  <div className="hero-overlay"></div>

  {/* Hero Content */}
  <div className="hero-content">
    <h1>Find Your Dream Home</h1>
    <p>
      Discover premium properties in the most desirable locations.
      From luxury villas to modern apartments, we have the perfect home for you.
    </p>

    <div className="hero-stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>

    <div className="hero-actions">
      <button className="btn btn-primary btn-large"
      onClick={() => window.scrollTo({ top: document.body.scrollHeight / 2, behavior: 'smooth' })}
      >
        <Search size={20} />
        Explore Properties
      </button>
      <button
        className="btn btn-secondary btn-large"
      >
        <Play size={20} />
        Watch Video
      </button>
    </div>
  </div>
</section>


      {/* Search and Filter Section */}
      <section id="properties" className="search-section">
        <div className="container">
          <div className="section-header">
            <h2>Find Your Perfect Property</h2>
            <p>Use our advanced search and filters to find properties that match your criteria</p>
          </div>
          <SearchFilter 
            onSearch={handleSearch}
            onFilter={handleFilter}
            properties={properties}
          />
        </div>
      </section>

      {/* Properties List Section */}
      <section className="properties-section">
        <div className="container">
          <PropertyList 
            properties={filteredProperties}
            loading={loading}
          />
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Properties</h2>
            <p>Handpicked premium properties that stand out from the rest</p>
          </div>
          
          <div className="featured-grid">
            {featuredProperties.map(property => (
              <div key={property.id} className="featured-card">
                <div className="featured-image">
                  <img src={property.image} alt={property.name} />
                  <div className="featured-badge">Featured</div>
                </div>
                <div className="featured-content">
                  <h3>{property.name}</h3>
                  <div className="featured-location">
                    <MapPin size={16} />
                    <span>{property.location}</span>
                  </div>
                  <div className="featured-price">
                    ${property.price.toLocaleString()}
                  </div>
                  <div className="featured-specs">
                    <span>{property.bedrooms} bed</span>
                    <span>{property.bathrooms} bath</span>
                    <span>{property.size}</span>
                  </div>
                  <Link 
                    to={`/property/${property.id}`} 
                    className="featured-link"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Property Plug?</h2>
            <p>We're committed to making your property journey smooth and successful</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Search size={32} />
              </div>
              <h3>Expert Guidance</h3>
              <p>Our experienced agents provide personalized guidance throughout your property journey.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <TrendingUp size={32} />
              </div>
              <h3>Market Insights</h3>
              <p>Stay ahead with our comprehensive market analysis and property valuation expertise.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Award size={32} />
              </div>
              <h3>Premium Service</h3>
              <p>Experience white-glove service with attention to every detail of your transaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Dream Home?</h2>
            <p>Contact our expert agents today and let us help you find the perfect property.</p>
            <div className="cta-actions">
              <button className="btn btn-primary btn-large">
                Get Started
              </button>
              <button className="btn btn-outline btn-large">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
