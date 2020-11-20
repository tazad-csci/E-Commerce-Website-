import React from 'react';

export default function PartsList(props) {

    console.log(props);
  return (
    <div className={"parts-list"}>
        {
            props.items.map((part)=>{
                return (
                    <div>
                        {part.description}
                    </div>
                )
            })
        }
    </div>
  );
}
