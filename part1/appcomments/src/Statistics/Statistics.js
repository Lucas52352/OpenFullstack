import React from "react";



const Statistics=(props)=>{
    return(
        <div>
             <table>
                <tbody>
                    <tr>
                     <td>{props.text}</td>
                     <td>{props.value}</td>
                    </tr>
                </tbody>  
             </table>
                                            
        </div>
    )
}


export default Statistics;