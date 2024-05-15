import React from 'react';
import Card from '../Components/Card';

const Ds = ({data}) => {
    const dataScience = data.filter((ele)=>ele.head==="Data Science")
    return (
        <div>
            {dataScience.map((element,index)=>{
                return(
                    <Card element={element} index={index}/>
                )

            })}
        </div>
    );
};

export default Ds;