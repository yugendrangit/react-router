import React from 'react';
import Card from '../Components/Card';


const Cyber = ({data}) => {
    const cyberSci = data.filter((ele)=>ele.head==="Cyber Security")
    return (
        <div>
            {cyberSci.map((element,index)=>{
                return(
                    <Card element={element} index={index} />
                )
            })}
        </div>
    );
};

export default Cyber;