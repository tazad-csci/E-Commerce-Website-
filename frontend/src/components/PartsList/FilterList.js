import React,{ useState, useEffect } from 'react';
import './filterList.css';


export default function FilterList(){

   
    return (
        <form className="form">
                <label className="label"> Search: </label>
                <input className="input" type="text" name="query"
                    placeholder="product"/>
                <button className="button" type="submit">search</button>
        </form>
    )
}
