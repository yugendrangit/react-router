import React from 'react';
import Card from '../Components/Card';

const Career = ({data}) => {
    const dev = data.filter((ele)=>ele.head==="DevOps")
    return (
        <div>
            {dev.map((element,index)=>{
                return(
                    <Card element={element} index={index}/>
                )
            })}
        </div>
    );
};

export default Career;