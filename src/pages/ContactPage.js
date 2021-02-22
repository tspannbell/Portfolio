import React from "react";
import Contact from "../componets/Contact"
import Paragraph from "../componets/Paragraph"

import '../styles/Contact.css';

class ContactPage extends React.Component {
  render() {
    return (
      
      <div>
            <Paragraph
                title="My Contact Info"
                description='Email: torrenspannbell@gmail.com'
                description2='Alt Email: tspannbell@gmail.com'
                description3='Phone: (704)299-6024'
            />
           
      <Contact/>
      </div>
    );
  }
}

export default ContactPage;