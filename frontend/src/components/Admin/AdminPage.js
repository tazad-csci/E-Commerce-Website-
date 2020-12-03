import React, { useEffect, useState } from 'react';
import APICalls from '../../functions/APICalls';
import FilterList from '../FilterList/FilterList';
import './adminPage.css'

export default function AdminPage() {
    const [orders, setOrders] = useState({ order_list: [], parts_included: [] });
    const [adminRules, setAdminRules] = useState([1, 2, 3]);
    const [modal, setModal] = useState({});
    const [rule, setRule] = useState({ cost: 0, value: 0 })
    useEffect(() => {
        APICalls.orders.getOrders(orders => {
            setOrders(orders);
        })
        APICalls.admin.getRules(rules => {
            setAdminRules(rules);
        })
        APICalls.parts.setQTY(1, 100, ()=>{});
    }, []);

    return (
        <>
            <FilterList name="Admin" />

            <div className="admin-container">
                <div className="admin-content">
                    <h2>
                        Shipping costs
                    </h2>

                    When shipping weight is above
                    <input type="number" value={rule.value} onChange={e => {
                        var new_value = e.target.value;
                        setRule(Object.assign({}, rule, { value: new_value }))
                    }}>
                    </input>
                    lbs charge $
                    <input type="number" value={rule.cost} onChange={e => {
                        var new_value = e.target.value;
                        setRule(Object.assign({}, rule, { cost: new_value }))
                    }}>
                    </input>
                    per lbs

                    <button
                        onClick={
                            () => {
                                APICalls.admin.addRule(rule, data => {
                                    APICalls.admin.getRules(data => {
                                        setAdminRules(data);
                                    })
                                });
                            }
                        }
                    >Sumbit</button>

                    <h3>
                        Current rules
                    </h3>
                    <table>
                        <th>
                            Shipping Rule
                        </th>
                        <th>
                            Remove Rule
                        </th>
                        {
                            adminRules.map(rule => {
                                return (
                                    <tr>
                                        <td>
                                            When shipping weight is above
                                            <b> {rule.rule_value}lbs </b>
                                            charge
                                            <b> ${rule.cost} per lbs </b>
                                        </td>
                                        <td className="clickable-td" onClick={() => {
                                            APICalls.admin.remRule(rule.id, () => {
                                                APICalls.admin.getRules(data => {
                                                    setAdminRules(data);
                                                })
                                            })

                                        }}>
                                            X
                                        </td>
                                    </tr>
                                )
                            })
                        }
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
                            Amount
                        </th>
                        <th>
                            View
                        </th>
                        <th>
                            Date
                        </th>

                        {orders.order_list.map(order => {
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
                                    <td className="clickable-td" onClick={() => setModal(order)}>
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


