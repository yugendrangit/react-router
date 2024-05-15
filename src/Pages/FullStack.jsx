import React from 'react';
import Card from '../Components/Card';

const FullStack = ({data}) => {
    const fsdData = data.filter((ele)=>ele.head==="Full Stack Development")
    return (
        <div>
            {fsdData.map((element,index)=>{
                return(
                    <Card element={element} index={index}/>
                )
            })}
        </div>
    );
};

export default FullStack;