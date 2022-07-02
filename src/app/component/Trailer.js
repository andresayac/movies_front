import React from "react";

const Trailer = function (props) {
    return (
        <>
            <iframe
                title={props.src}
                allowFullScreen
                className="embed-responsive-item"
                frameBorder="0"    
                src={props.data}                
            />
        </>
    );
}



export default Trailer;

