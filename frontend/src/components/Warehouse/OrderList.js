import React from 'react';
import APICalls from '../../functions/APICalls';
import OrderCard from './OrderCard';
import './OrderList.css'


class OrderList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            search: "",
            data: [],
        }
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }
    componentDidMount() {
        APICalls.orders.getOrders(data => {
            console.log(data)
            this.setState({
                data: data.order_list,
            })
        })
    }

    example = { "orderID": 1,
     "shipped": null,
     "orderNumber": "9005-6972062066-8609.243089855496",
     "amount": 36.58,
     "shippingID": 1,
     "creditAuth": "13521",
     "full_address": "fsdf",
     "full_name": "fsd",
     "email": "fds" }

    render() {
        return (
            <div className="order-list-wrapper">

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
                    {/* {this.state.data.map(order => <OrderCard item={order} />)} */}
                    {this.state.data.map(order=>{
                        return (
                            <tr>
                                <td>
                                    {order.orderNumber}
                                </td>
                                <td>
                                    {order.full_name}
                                </td>
                                <td>
                                    Print Label
                                </td>
                                <td>
                                    Mark Complete
                                </td>
                            </tr>
                        )
                    })}

                </table>
            </div>
        )
    }
}

export default OrderList