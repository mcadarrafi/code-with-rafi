import React, { useEffect } from 'react'

function Alert(props) {
    const toSentanceCase = (word) => {
        return word.charAt(0).toUpperCase()+word.substring(1);
        // console.log(str);
    }
    useEffect(() => {
     setTimeout(2000);   
    })
    return (
        props.alert && 
        <div class={`alert alert-${props.alert.type}`}>
            <strong>{toSentanceCase(props.alert.type)}!</strong> {props.alert.message}.
        </div>
        // <div class="alert alert-warning alert-dismissible fade show" role="alert" style={{textAlign:'left'}}>
        //     <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        //     <button type="button" class="close" data-dismiss="alert" aria-label="Close" style={{float:'right'}}>
        //         <span aria-hidden="true">&times;</span>
        //     </button>
        // </div>
    )
}

export default Alert