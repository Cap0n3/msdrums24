import React from "react";

const Graduate = ({ height = 60, width = 60, color = "black" }) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox="-7.5 16.5 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M-1.5,29.5c0,0,0,3.4,0,3.5c0,1.4,2.7,2.5,6,2.5s6-1.1,6-2.5c0-0.1,0-3.5,0-3.5l-6,2L-1.5,29.5z"
                    fill={color}
                />
                <path
                    d="M4.7,26L-2,28.3l6.5,2.2l12-4l-12-4l-12,4l4,1.3L4.3,25c0.3-0.1,0.5,0,0.6,0.3C5.1,25.6,4.9,25.9,4.7,26z"
                    fill={color}
                />
                <path
                    d="M-2.5,34c0-0.7-0.4-1.2-1-1.4V29c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5v3.6c-0.6,0.2-1,0.8-1,1.4c0,0.6,0.3,1.1,0.8,1.3l-0.8,3.2h3l-0.8-3.2C-2.8,35.1-2.5,34.6-2.5,34z"
                    fill={color}
                />
            </svg>
        </>
    );
};

export default Graduate;
