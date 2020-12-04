import React from 'react';
import APICalls from '../../functions/APICalls';
import InvoiceModalButton from './InvoiceModalButton';
import './OrderList.css'


class OrderList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            search: "",
            data: [],
            show: false,
        }
    }

    showModal = e => {
        this.setState({
            show: !this.state.show
        })
        console.log("CLIKCED")
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
                parts_included: data.parts_included,
            })
        })
    }

    updateOrders() {
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

                <table>
                    <tr>
                        <th className="th-hide">Order Number</th>
                        <th className="th-hide">Customer Name</th>
                        <th className="th-hide">Shipping Label and Invoice</th>
                        <th className="th-hide">Update Order Status</th>
                    </tr>
                    
                    {this.state.data.map(order=>{

                        var parts = this.state.parts_included.filter(part=> part.orderID === order.orderID)
                        console.log(parts)

                        return (
                            <tr>
                                <td className="td-hide">
                                    {order.orderNumber}
                                </td>
                                <td className="td-hide">
                                    {order.full_name}
                                </td>
                                <td className="invoice-label">
                                    <InvoiceModalButton order={order} parts={parts}/>
                                </td>
                                <td 
                                    className="clickable-td"
                                    onClick={()=>APICalls.orders.setShipped(order.orderID, ()=>{this.updateOrders()})}
                                >
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