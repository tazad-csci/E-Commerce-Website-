import React from 'react';
import axios from 'axios';
//import OrderCard from './OrderCard';


class OrderList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            search: "",
            data: [],
            isLoading: false,
            error: null,
        }       
    }

    async getOrders() {
        this.setState({isLoading: true})
        
        try {
            const response = await axios.get('')
            const items = response.data
            this.setState({data: items})
        } catch(err) {
            console.log(err)
        }

        this.setState({isLoading: false})
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }

    render() {
        return(
            <div>
              
                <h1>Out Going Orders</h1>
                <input
                            type="text"
                            value={this.state.search}
                            placeholder="search for an order"
                            name="search"
                            onChange={this.handleChange}
                        />
                <table>
                    <tr>
                        <th>Order Number</th>
                        <th>Custome Name</th>
                        <th>Shipping Label and Invoice</th>
                        <th>Update Order Status</th>
                    </tr>
                    {/* {this.props.data.map(order => <OrderCard item={order} />)} */}
                    {this.props.data.map(order => 
                    <tr>
                        <td>{this.props.order.id}</td>
                        <td>{this.props.order.name}</td>
                        <td>Show Invoice and Label</td>
                    </tr>
                        )}
                </table>
            </div>
        )
    }
}

export default OrderList