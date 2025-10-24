# Property Plug - Professional Property Selling Website

A modern, responsive React.js website for selling properties with advanced search, filtering, and email integration features.

# Live Demo [/]
👋[Click Me](https://sbpropertyplug.vercel.app) - Website is Live ✨


## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Fully mobile-responsive across all devices
- **Advanced Search & Filtering**: Search by name, location, features with multiple filter options
- **Property Details**: Comprehensive property information with image galleries
- **Contact Forms**: Integrated email system for lead generation
- **Component-Based Architecture**: Modular React components for easy maintenance
- **Professional Styling**: Modern CSS with gradients, shadows, and smooth transitions

## 📱 Pages & Components

### Pages
- **Home Page**: Hero section, featured properties, search/filter interface
- **Property Details**: Detailed property view with image gallery and specifications
- **Contact Form**: Lead generation form with email integration

### Components
- **Navbar**: Responsive navigation with mobile menu
- **PropertyCard**: Property listing cards with hover effects
- **SearchFilter**: Advanced search and filtering interface
- **PropertyList**: Grid layout for property listings
- **ContactForm**: Email integration for lead capture

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd houseProperty-sell
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS (Required for contact forms)**
   
   a. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
   
   b. Create an email service (Gmail, Outlook, etc.)
   
   c. Create an email template with these variables:
      - `{{from_name}}` - User's name
      - `{{from_email}}` - User's email
      - `{{phone}}` - User's phone number
      - `{{message}}` - User's message
      - `{{property_name}}` - Property name
      - `{{to_email}}` - Your email address
   
   d. Update `src/config/emailConfig.js` with your EmailJS credentials:
   ```javascript
   export const EMAIL_CONFIG = {
     SERVICE_ID: 'your_service_id',
     TEMPLATE_ID: 'your_template_id',
     USER_ID: 'your_user_id',
     TO_EMAIL: 'your-email@example.com'
   };
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Adding Your Own Images
Replace the Unsplash image URLs in `src/data/properties.js` with your own property images:

```javascript
image: "path/to/your/image.jpg"
```

### Updating Property Data
Edit `src/data/properties.js` to add, remove, or modify properties:

```javascript
{
  id: 1,
  name: "Your Property Name",
  type: "House",
  price: 500000,
  size: "2000 sq ft",
  bedrooms: 3,
  bathrooms: 2,
  location: "Your City, State",
  image: "your-image-url",
  description: "Property description...",
  features: ["Feature 1", "Feature 2"],
  yearBuilt: 2020,
  parking: 2,
  furnished: "Fully Furnished"
}
```

### Styling Customization
- Main styles: `src/App.css`
- Component styles: `src/components/*.css`
- Page styles: `src/pages/*.css`
- Global styles: `src/index.css`

## 📧 Email Setup Details

### EmailJS Template Example
```
Subject: New Property Inquiry - {{property_name}}

Hello,

You have received a new property inquiry:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Property: {{property_name}}

Message:
{{message}}

Best regards,
Property Plug Website
```

### Required EmailJS Setup
1. Create EmailJS account
2. Add email service (Gmail/Outlook)
3. Create template with above variables
4. Get service ID, template ID, and user ID
5. Update configuration file

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Environment Variables (Optional)
Create `.env` file for sensitive data:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

## 🔧 Technologies Used

- **React.js** - Frontend framework
- **React Router** - Navigation
- **EmailJS** - Email service
- **Lucide React** - Icons
- **CSS3** - Styling with modern features
- **Responsive Design** - Mobile-first approach

## 📞 Support

For support or questions:
- Email: your-email@example.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is licensed under the MIT License.

---

**Note**: Remember to replace placeholder values (emails, phone numbers, etc.) with your actual business information before deploying.
