import React from 'react'
import InvoiceModal from './InvoiceModal';
import "./InvoiceModalButton.css"

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
            <div> 

                <div 
                    onClick={e => {this.showModal(e)}} 
                    className="clickable-div"
                >
                    Get Label and Invoice
                </div>

                <InvoiceModal 
                    onClose={this.showModal} 
                    show={this.state.show} 
                    order={this.props.order}
                    parts={this.props.parts}
                />
                
            </div>
        )
    }
}

export default CheckoutButton