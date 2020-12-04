import React, { useEffect, useState } from 'react';
import APICalls from '../../functions/APICalls';
import FilterList from '../FilterList/FilterList';
import './adminPage.css'

export default function AdminPage() {
    const [orders, setOrders] = useState({ order_list: [], parts_included: [] });
    const [adminRules, setAdminRules] = useState([]);
    const [modal, setModal] = useState({});
    const [rule, setRule] = useState({ cost: 0, value: 0 })

    const [orderFilter, setOrderFilter] = useState("")
    const [priceSort, setpriceSort] = useState({ hi: 0, low: 0 });
    const [dateSort, setDateSort] = useState({ hi: null, low: null });
    const [statusSort, setStatusSort] = useState(0);

    useEffect(() => {
        APICalls.orders.getOrders(orders => {
            setOrders(orders);
        }, 1)
        APICalls.admin.getRules(rules => {
            setAdminRules(rules);
        })
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
                    Filter for text: <input value={orderFilter} onChange={e => setOrderFilter(e.target.value)}></input>
                    <br />
                    Between $<input type="number" value={priceSort.low} onChange={e => setpriceSort(Object.assign({}, priceSort, { low: e.target.value }))}></input> and $<input type="number" value={priceSort.hi} onChange={e => setpriceSort(Object.assign({}, priceSort, { hi: e.target.value }))}></input>
                    <br />
                    Between <input className="date-in" type="date" value={dateSort.low} onChange={e => setDateSort(Object.assign({}, dateSort, { low: e.target.value }))}></input> and <input className="date-in" type="date" value={dateSort.hi} onChange={e => setDateSort(Object.assign({}, dateSort, { hi: e.target.value }))}></input>
                    <br />
                    Show
                    <form>
                        <label class="radio-inline">
                            <input type="radio" checked={statusSort === 0} onClick={() => setStatusSort(0)} />All
                        </label>
                        <label class="radio-inline">
                            <input type="radio" checked={statusSort === 1} onClick={() => setStatusSort(1)} />Auth
                        </label>
                        <label class="radio-inline">
                            <input type="radio" checked={statusSort === 2} onClick={() => setStatusSort(2)} />Shipped
                        </label>
                    </form>
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

                        {orders.order_list.filter(order => {
                            var will_display = true;
                            if (orderFilter) {
                                if (!JSON.stringify(order).toLowerCase().includes(orderFilter.toLowerCase()))
                                    will_display = false;
                            }
                            if (priceSort.hi > 0 && priceSort.low > 0)
                                if (order.amount > priceSort.hi || order.amount < priceSort.low)
                                    will_display = false;

                            if (dateSort.hi && dateSort.low) {
                                var order_date = new Date(order.orderDate);
                                var hi = new Date(dateSort.hi);
                                var low = new Date(dateSort.low);
                                if (order_date > hi || order_date < low)
                                    will_display = false
                            }

                            if(statusSort > 0){
                                if(statusSort == 1 && order.statusText.toLowerCase().includes("ship")){
                                    will_display = false;
                                }
                                if(statusSort == 2 && order.statusText.toLowerCase().includes("auth")){
                                    will_display = false;
                                }
                            }

                            return will_display;
                        }).map(order => {
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


