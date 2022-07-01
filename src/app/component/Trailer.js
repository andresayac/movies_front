

import React from "react";

const Trailer = function (props) {
    console.log(props);
    return (
        <>
            <iframe
                title={props.src}
                allowFullScreen
                className="embed-responsive-item"
                frameBorder="0"
                height="315px"
                width="560px"
                src={props.data}                
            />
        </>

    );
}



export default Trailer;

