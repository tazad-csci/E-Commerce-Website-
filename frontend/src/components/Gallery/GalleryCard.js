import React from 'react';
import './GalleryCard.css';

class GalleryCard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            quantity: 1,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
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
                <p>Quantity Available: {this.props.item.on_hand}</p>
                <label>${this.props.item.price}</label>
                <button onClick={
                    ()=>{
                        this.props.add_to_cart(this.props.item, this.state.quantity)
                    }
                }> Add to Cart </button>
                <input
                    type="number"
                    value={this.state.quantity}
                    placeholder="Qty"
                    name="quantity"
                    onChange={this.handleChange}
                />
            </div>
        );
    }

}

export default GalleryCard;