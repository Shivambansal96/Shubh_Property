// EmailJS Configuration
// Replace these with your actual EmailJS service details

// export const EMAIL_CONFIG = {
//   // Get these from https://www.emailjs.com/
//   SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
//   TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
//   USER_ID: 'YOUR_USER_ID', // Replace with your EmailJS user ID
//   TO_EMAIL: 'your-email@example.com' // Replace with your email address
// };


export const EMAIL_CONFIG = {
  // Get these from https://www.emailjs.com/
  SERVICE_ID: 'checking-demo', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_wtrex54', // Replace with your EmailJS template ID
  USER_ID: 'alex', // Replace with your EmailJS user ID
  TO_EMAIL: 'theotrial582@gmail.com' // Replace with your email address
};

// EmailJS Template Variables
// The template should include these variables:
// - {{from_name}} - User's name
// - {{from_email}} - User's email
// - {{phone}} - User's phone number
// - {{message}} - User's message
// - {{property_name}} - Property name
// - {{to_email}} - Your email address

export const EMAIL_TEMPLATE_VARS = {
  from_name: '{{from_name}}',
  from_email: '{{from_email}}',
  phone: '{{phone}}',
  message: '{{message}}',
  property_name: '{{property_name}}',
  to_email: '{{to_email}}'
};
