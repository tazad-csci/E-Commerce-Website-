import React, { useState, useEffect } from 'react';
import InventoryTitle from './InventoryTitle';
import './inventoryPage.css';
import FilterList from '../FilterList/FilterList';
import APICalls from '../../functions/APICalls';


class InventoryPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            search: "",
            data: [],
        }
    }

    componentDidMount(){
        APICalls.parts.list(data=>{
            this.setState({
                data
            })
        })
    }

    render() {
        return (
            <div className="inventory-list">
                <FilterList name="Recieving"/>
                <span className="searchBar">
                    <input type="text"
                        placeholder="Find Part..."
                        name="recieve"
                    />

                </span>
                <table className="parts-Table">
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            ID-Part
                        </th>
                        <th>
                            QTY
                        </th>
                    </tr>
                    {this.state.data.map(part => {
                        return (
                            <tr>
                                <td>
                                    {part.description}
                                </td>
                                <td>
                                    {part.number}
                                </td>
                                <td>
                                    <input type="number" id="quantity" value={part.on_hand} name="quantity" min="0" onChange={
                                        (e)=>{
                                            console.log(part)
                                            var part_id = part.number;
                                            var new_qty = e.target.value;
                                            console.log("Trying to change:", part_id, new_qty);
                                            //TODO: Call API
                                        }
                                    }></input>
                                </td>
                            </tr>
                        )
                    })}
                </table>

            </div>
        )
    }
}

export default InventoryPage
