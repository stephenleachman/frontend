import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message}) => (
  <div>
    <h1>Hello, {name}!</h1>
    <p>Thank you for reaching out. I will review your message and reach out to you as soon as possible.</p>
    <br />
    <h3>Here is a coppy of your message</h3>
    <h4>Name: {name}</h4>
    <h4>Email: {email}</h4>
    <h4>Message:</h4>
    <p>{message}</p>
  </div>
);
export default ContactEmail;