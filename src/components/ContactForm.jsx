import emailjs from 'emailjs-com';
import { ArrowLeft, Mail, MessageSquare, Phone, Send, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EMAIL_CONFIG } from '../config/emailConfig';
import { properties } from '../data/properties';
import './ContactForm.css';

// ----- FORM SPREE ------
// import { useForm, ValidationError } from '@formspree/react';
// ----- FORM SPREE ------

const ContactForm = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const selectedProperty = properties.find(p => p.id === parseInt(propertyId));
    setProperty(selectedProperty);
    if (selectedProperty) {
      setFormData(prev => ({
        ...prev,
        propertyName: selectedProperty.name
      }));
    }
  }, [propertyId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        property_name: formData.propertyName,
        to_email: EMAIL_CONFIG.TO_EMAIL
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID, 
        EMAIL_CONFIG.TEMPLATE_ID, 
        templateParams, 
        EMAIL_CONFIG.USER_ID
      );
      
      setSubmitStatus('success');
      
      // Redirect to property details after successful submission
      setTimeout(() => {
        navigate(`/property/${propertyId}`);
      }, 2000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!property) {
    return (
      <div className="contact-form-container">
        <div className="property-not-found">
          <h2>Property not found</h2>
          <button onClick={() => navigate('/')} className="btn btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      <div className="contact-form-header">
        <button 
          onClick={() => navigate('/')} 
          className="back-button"
        >
          <ArrowLeft size={20} />
          Back to Properties
        </button>
        
        <div className="property-preview">
          <img src={property.image} alt={property.name} />
          <div className="property-info">
            <h2>{property.name}</h2>
            <p>{property.location}</p>
            {/* <span className="price">${property.price.toLocaleString()}</span> */}
          </div>
        </div>
      </div>

      <div className="contact-form-content">
        <div className="form-section">
          <h3>Contact Our Agent</h3>
          <p>Fill out the form below and our agent will get back to you within 24 hours.</p>

          {submitStatus === 'success' && (
            <div className="success-message">
              <p>Thank you for your interest! Our agent will contact you soon.</p>
              <p>Redirecting to property details...</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="error-message">
              <p>There was an error sending your message. Please try again.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form" >
            <div className="form-group">
              <label htmlFor="name">
                <User size={16} />
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <Mail size={16} />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                <Phone size={16} />
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <MessageSquare size={16} />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements, preferred viewing times, or any questions you have..."
                rows="5"
              />
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        <div className="agent-info">
          <h4>Your Agent</h4>
          <div className="agent-card">
            <div className="agent-avatar">
              <User size={24} />
            </div>
            <div className="agent-details">
              <h5>Shubh Somani</h5>
              <p>Senior Real Estate Manager</p>
              <div className="agent-contact">
                <Phone size={14} />
                <span>+91 7432854909</span>
              </div>
              <div className="agent-contact">
                <Mail size={14} />
                <span>shubh@propertyplug.com</span>
              </div>
            </div>
          </div>

          <div className="response-time">
            <h5>Response Time</h5>
            <p>We typically respond within 2-4 hours during business hours (9 AM - 6 PM EST).</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
