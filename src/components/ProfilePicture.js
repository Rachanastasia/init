import React from 'react'

function ProfilePicture(props) {
    /* This component renders a hexigon filled with an image. 
    Please pass this image in as props.image */

    return (
        <svg viewBox=' 0 0 100 100' version='1.1' xmlns='http://www.w3.org/2000/svg'>
            <defs>
                <pattern id='img' patternUnits='userSpaceOnUse' width='100' height='100'>
                    <image href={props.image} x="-25" width="150" height='100' />
                </pattern>
            </defs>
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" />
        </svg>
    )
}

export default ProfilePicture
