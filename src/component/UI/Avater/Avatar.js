import React from 'react';
import "./Avatar.scss";

const Avatar = ({ imageSrc, text }) => {
   
    return (
        <div className="avatar">
            <img className="avatar__image" src={imageSrc} alt="avater_image"/>
            <div className='avatar__name'>
                {text}
            </div>
        </div>
    )
}

export default Avatar
