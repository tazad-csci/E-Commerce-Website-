import React from 'react'
import "./InvoiceModal.css"

class InvoiceModal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }

    getTotalWeight() {
        var total = 0;
        this.props.parts.map(part => total += part.partWeight) 
        return total.toFixed(2)
    }
    getTotalQty() {
        var total = 0;
        this.props.parts.map(part => total += part.qty) 
        return total.toFixed(2)
    }
    getTotalCost() {
        var total = 0;
        this.props.parts.map(part => total += part.partCost) 
        return total.toFixed(2)
    }

    render() {
        if (!this.props.show){
            return null
        }
        return(
            <div className="invoice-modal">
                <div className="print-label">
                    <button 
                        onClick={e => {this.onClose(e)}}
                        className="close-button"
                    >
                        Close
                    </button>

                    <p>Parts Buyer</p>
                    <p>555 Parts Buyer Lane</p>
                    <p>DeKalb, Illinois 60115</p>

                    <div className="text-center">
                        <p>{this.props.order.full_name}</p>
                        <p>{this.props.order.full_address}</p>
                    </div>

                    <table className="invoice-table">
                        <tr>
                            <th>Part Name</th>
                            <th>Part Weight</th>
                            <th>Part Qty</th>
                            <th>Unit Price</th>
                            <th>Amount</th>
                        </tr>
                        {this.props.parts.map(part => 

                        <tr>
                            <td>
                                {part.partName}
                            </td>
                            <td>
                                {part.partWeight}
                            </td>
                            <td>
                                {part.qty}
                            </td>
                            <td>
                                {part.partCost}
                            </td>
                            <td>
                                {part.partCost * part.qty}
                            </td>
                        </tr>
                        )}
                    </table>
                        <p>Total Weight: {this.getTotalWeight()}</p>
                        <p>Total Qty: {this.getTotalQty()}</p>
                        <p>Total Cost: {this.getTotalCost()}</p>
                            

                </div>
            </div>
        )
    }
}

export default InvoiceModal