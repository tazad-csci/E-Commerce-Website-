import React from 'react';

class OrderCard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
    
        }       
    }


    render() {
        console.log(this.props.order)
        return(
            <tr>
                <td>{this.props.order.orderID}</td>
            </tr>
        )
    }
}

export default OrderCard