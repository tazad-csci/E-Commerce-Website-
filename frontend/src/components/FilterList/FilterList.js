import React, { useState, useEffect } from 'react';
import './filterList.css';


export default function FilterList(props) {


    return (
        <div className="filter-bar">
            <span className="website-header"> Parts Buyer </span>
            <input className="input" type="text"
                placeholder="Search for a part..."
                value={props.cur_filter}
                onChange={e => props.change_filter(e.target.value)}

            />
        </div>

    )
}
