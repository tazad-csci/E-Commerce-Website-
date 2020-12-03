import React from 'react';
import FilterList from '../FilterList/FilterList';

export default function AdminPage() {
    return (
        <>
            <FilterList
                name="Admin"
            />

            <div className="admin-contianer">
                <div className="admin-content">
                    <h2>
                        Shipping costs
                    </h2>
                    <table>

                    </table>

                    <h2>
                        Orders
                    </h2>
                    <table>
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

                        {[].map(order=>{
                            
                        })}
                    </table>
                </div>
            </div>
        </>
    );
}


