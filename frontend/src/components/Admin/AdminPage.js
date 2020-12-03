import React, { useEffect, useState } from 'react';
import APICalls from '../../functions/APICalls';
import FilterList from '../FilterList/FilterList';
import './adminPage.css'

export default function AdminPage() {
    const [orders, setOrders] = useState({order_list: [], parts_included: []});
    const [adminRules, setAdminRules] = useState([]);

    useEffect(() => {
      APICalls.orders.getOrders(orders=>{
          setOrders(orders);
      })
    }, []);

    return (
        <>
            <FilterList name="Admin"/>

            <div className="admin-container">
                <div className="admin-content">
                    <h2>
                        Shipping costs
                    </h2>
                    <table>

                    </table>
                    
                    <h2>
                        Orders
                    </h2>
                    <table className="admin-order-table">
                        <th>
                            Order Number
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            amount
                        </th>
                        <th>
                           View 
                        </th>
                        <th>
                           Date 
                        </th>

                        {orders.order_list.map(order=>{
                            return (
                                <tr>
                                    <td>
                                        {order.orderNumber}
                                    </td>
                                    <td>
                                        {order.statusText}
                                    </td>
                                    <td>
                                        {order.amount}
                                    </td>
                                    <td>
                                     View Order
                                    </td>
                                    <td>
                                        {order.orderDate}
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </>
    );
}


