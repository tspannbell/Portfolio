import React from "react";
import "../styles/Contact.css"
import Paragraph from "./Paragraph";

export default function Contact() {
  
    return (
     <div> 
         
            <form method="post" action="mailto:torrenspannbell@youremail.com" >
                <h1>  Send Me an Email</h1>
                <input type="submit" value="Send Email"/> 
            </form>
     </div>
        
    );
  }
  
