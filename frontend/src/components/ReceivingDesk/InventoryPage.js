import React,{ useState, useEffect } from 'react';
import InventoryList from './InventoryList';
import './inventoryPage.css';


class InventoryPage extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            search: "",
            date: [],
        }
    }


render(){
    return(
        <div className="inventory-list">
            
            <InventoryList></InventoryList> <br></br>
            <span className="searchBar">
            <input  type="text"
                placeholder="Search for Part..."  
                name="recieve"        
            />

            </span><br></br>
            <fieldset className="field">
               <table className="table">
                   <tr>
                       <th>
                           Name
                        </th>
                       <th>
                           ID-Part
                        </th>
                       <th>
                         <label for="quantity">Qty </label>
                         <input type="number" id="quantity" name="quantity" min="1"></input>
                       </th>
                   </tr>
               </table>
            </fieldset>
      </div>
      )
    }
}

export default InventoryPage
