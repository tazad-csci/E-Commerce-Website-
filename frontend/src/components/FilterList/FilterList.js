import React,{ useState, useEffect } from 'react';
import './filterList.css';


export default function FilterList(props){

   
    return (
        <form className="form">
                <label className="label"> Search: </label>
                <input className="input" type="text" name="query"
                    placeholder="product"
                    value={props.cur_filter}
                    onChange={(e,e1)=>props.change_filter(e.target.value)}
                    
                    />
                {/* <button className="button" type="submit">search</button> */}
        </form>
    )
}
