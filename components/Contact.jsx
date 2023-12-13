import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-2xl my-10 mx-2 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <p className="text-gray-700">I'd love to hear from you. Feel free to reach out!</p>
      {/* Add contact details such as email, phone, or a contact form */}
      <div className="mt-4">
        <p className="text-gray-700">Email: your.email@example.com</p>
        {/* Add more contact details as needed */}
      </div>
    </div>
  );
};

export default Contact;
