import React from 'react';
import './GalleryCard.css';

class GalleryCard extends React.Component {

    constructor(props) {
        super(props)

        this.state ={
            quantity: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }

    handleSubmit() {
        //Add the selected quantity of item to cart
    }

    render() {

        return (
            <div className="gallery-card">
      
                <img 
                    src={this.props.item.pictureURL} 
                    alt={this.props.item.description}
                >
                </img>

                <p>{this.props.item.description}</p>
                <p>Quantity Available: {this.props.item.quantity}</p>
                
                <form onSubmit={this.handleSubmit}>
                    <label>${this.props.item.price}</label>

                    <button> Add to Cart </button>

                    <input 
                        type="text" 
                        value={this.state.quantity} 
                        placeholder="Qty" 
                        name="quantity" 
                        onChange={this.handleChange} 
                    />

                </form>
            </div>
        );
    }
    
  }
  
  export default GalleryCard;