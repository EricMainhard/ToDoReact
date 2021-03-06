import React from 'react';

function MyLoader(){
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: "auto" }}
            width="118"
            height="118"
            display="block"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 100 100"
            >
            <circle cx="50" cy="23" r="13" fill="#b6d4cd">
                <animate
                    attributeName="cy"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9"
                    keyTimes="0;0.5;1"
                    repeatCount="indefinite"
                    values="23;77;23"
                ></animate>
            </circle>
        </svg>
)
}

export {MyLoader}
