import React from 'react';

class OrderCard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
    
        }       
    }


    render() {
        return(
            <div>
                {this.props.order.name}
                {this.props.order.id}
            </div>
        )
    }
}

export default OrderCard