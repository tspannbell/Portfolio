import React from "react";
import Contact from "../componets/Contact";
import '../styles/Contact.css';
import ContactCard from "../componets/ContactCard";
class ContactPage extends React.Component {
  render() {
    return (
      
      <div>
        <ContactCard 
          title="My Contact Info"
          description='Email: torrenspannbell@gmail.com'
          description2='Alt Email: tspannbell@gmail.com'
          description3='Loacation: Charlotte, North Carolina' />
       
            <Contact />
       
      </div>
    );
  }
}

export default ContactPage;