import React from 'react'
import CheckoutModal from '../../container/CheckoutModal'
import './CheckoutButton.css'

class CheckoutButton extends React.Component {

    state = {show: false}
    showModal = e => {
        this.setState({
            show: !this.state.show
        })
        console.log(this.state.show)
    }

    render(){
        return(
            <div className="checkout-container"> 

                <button 
                    onClick={e => {this.showModal(e)}} 
                    className="parts-list-button"
                >
                    Checkout
                </button>

                <CheckoutModal 
                    onClose={this.showModal} 
                    show={this.state.show} 
                />
                
            </div>
        )
    }
}

export default CheckoutButton