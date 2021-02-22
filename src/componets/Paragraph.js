import React from "react";
import "../styles/Paragraph.css";

class Paragraph extends React.Component {
    render() {
        return (
            <div className="card-p">
                {/* <img alt={this.props.title} src={this.props.link} /> */}
                <div className="card-body">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description} </p>
                    <p>{this.props.description2} </p>
                    <p>{this.props.description3} </p>
                    <br />
                </div>
            </div>

        )
    }
}

export default Paragraph;