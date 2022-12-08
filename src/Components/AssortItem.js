import React from "react";  
import { useParams } from "react-router";           


const AssortItem = (props) => {   
    const {id} = useParams()
                       
    return(
        <>
            <div className="assortItem__container">
                <p> {console.log(id)} </p>

            </div>
        </>
    );  
};

export default AssortItem;