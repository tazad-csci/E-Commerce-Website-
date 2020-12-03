import React from 'react';
import axios from 'axios';
import './CheckoutModal.css';

class CheckoutModal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            cc: "",
            name: "",
            exp: "",
            email: "",
            mailingAddr: "",
            orderNum: null,
        }
        this.handleChange = this.handleChange.bind(this)
        //this.setOrderNum = this.setOrderNum.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }

    async onSubmit() {
        console.log("Submitted")
        var post_data = {
            cardInfo: {
                cc: this.state.cc,
                name: this.state.name,
                exp: this.state.exp,
            },
            items: this.props.items,
        }
        try{
            var response =   response = axios.post("https://sugarytomatoes.com/order/checkout", post_data)
            if (response) {
                this.setOrderNum(response)
                setTimeout(()=>{
                    this.props.refreshData();
                },1000)
            }
        }
        catch(e){
            console.log(e)
        }
    }

    setOrderNum(num){
        console.log(num)
        this.setState({
            orderNum: 123456
        })
    }

    render() {
        if (!this.props.show){
            return null
        }
        return(
            <div className="checkout-modal">
                <div className="modal-content">
                    <button
                        className="close-button" 
                        onClick={e => this.onClose(e)}
                        >
                        Close
                    </button>
                    
                    {this.state.orderNum ? 
                    
                    <h2>Your Order Number: {this.state.orderNum}</h2>
                    
                    : 

                    (<><h2>Checkout</h2>
                    <div >
                        <p>Your total is {this.props.total.toFixed(2)}</p>
                        <p>Your qty is {this.props.qty.toFixed(2)}</p>
                        <p>Your order weight is {this.props.weight.toFixed(2)}</p>

                        <input
                            type="text"
                            value={this.state.email}
                            placeholder="email address"
                            name="email"
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            value={this.state.mailingAddr}
                            placeholder="mailing address"
                            name="mailingAddr"
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            value={this.state.cardNum}
                            placeholder="credit card number"
                            name="cc"
                            onChange={this.handleChange}
                        />
                         <input
                            type="text"
                            value={this.state.name}
                            placeholder="name on card"
                            name="name"
                            onChange={this.handleChange}
                        />
                         <input
                            type="text"
                            value={this.state.exp}
                            placeholder="expiration date"
                            name="exp"
                            onChange={this.handleChange}
                        />
    
                        <button 
                        onClick={e => {this.onSubmit()}}
                        className="checkout-button"
                        >
                            Submit
                        </button>
                        
                    </div>
                    </>)
                    }
                </div>
            </div>
        )
    }
}

export default CheckoutModal