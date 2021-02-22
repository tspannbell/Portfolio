import React from "react";
import "../styles/Products.css";

class Products extends React.Component {
    render() {
        return (
            <div className="card">
                <img alt={this.props.title} src={this.props.pic} />
                <div className="card-body">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description} </p>
                    <br />
                    <button className="button"> <a className="words" href={this.props.site}>Check out the Code</a></button>
                    <button className="button"> <a className="words" href={this.props.site2}>Check out the Project </a></button>
                </div>
               
            </div>

        )
    }
}

export default Products;