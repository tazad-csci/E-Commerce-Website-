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
    componentDidMount(){
        APICalls.orders.getOrders(data =>{
            console.log(data)
            this.setState({
                data: data.order_list,
            })
        })
    }

    render() {
        return(
            <div className="order-list-wrapper">
              
                <h1 className="title">Out Going Orders</h1>
                <input
                            type="text"
                            value={this.state.search}
                            placeholder="search for an order"
                            name="search"
                            onChange={this.handleChange}
                            className="filter"
                        />
                <table>
                    <tr>
                        <th>Order Number</th>
                        <th>Custome Name</th>
                        <th>Shipping Label and Invoice</th>
                        <th>Update Order Status</th>
                    </tr>
                    {/* {this.state.data.map(order => <OrderCard item={order} />)} */}
                      
                </table>
            </div>
        )
    }
}

export default OrderList