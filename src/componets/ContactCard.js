import React from "react";
import "../styles/ContactCard.css";

class ContactCard extends React.Component {
    render() {
        return (
            <div className="contact-p">
                {/* <img alt={this.props.title} src={this.props.link} /> */}
                <div className="contact-body">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description} </p>
                    <h2>{this.props.title2}</h2>
                    <p>{this.props.description2} </p>
                    <p>{this.props.description3} </p>
                    <br />
                </div>
            </div>

        )
    }
}

export default ContactCard;