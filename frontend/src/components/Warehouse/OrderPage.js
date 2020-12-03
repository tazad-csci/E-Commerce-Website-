import React from 'react';
import OrderList from './OrderList';
import FilterList from '../FilterList/FilterList'

const Orders = {"order_list":[{"orderID":1,"shipped":null,"orderNumber":"9005-6970462273-837.14765644187","amount":1075.8,"shippingID":1,"creditAuth":"10975"}],"shipping_info":[{"shippingID":1,"full_address":"fsdf","full_name":"fsd","email":"fds"}]}


class OrderPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
    
        }       
    }


    render() {
        return(
            <div>
               <FilterList name={"Shipping"} />
               <OrderList orders={Orders}/>
            </div>
        )
    }
}

export default OrderPage