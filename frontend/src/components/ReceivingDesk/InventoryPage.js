import React,{ useState, useEffect } from 'react';
import InventoryTitle from './InventoryTitle';
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
            
            <InventoryTitle></InventoryTitle> <br></br>
            <span className="searchBar">
            <input  type="text"
                placeholder="Find Part..."  
                name="recieve"        
            />

            </span><br></br>
               <table className="parts-Table">
                   <tr>
                       <th>
                           Name
                        </th>
                       <th>
                           ID-Part
                        </th>
                   </tr>
                   <tr className="table-Headers">
                       <th>
                           ???
                        </th>
                       <th>
                           ???
                       </th>
                       <th>
                         <label for="quantity">Qty </label>
                         <input type="number" id="quantity" name="quantity" min="1"></input>
                       </th>
                   </tr>
               </table>               
               <input type="submit" value="Update Parts"></input>

      </div>
      )
    }
}

export default InventoryPage
