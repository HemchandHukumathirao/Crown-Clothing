import React from 'react';
import './menu-item.scss';

const MenuItem = ({title, backgroundImageUrl, size}) => {
    return (
        <div className={`${size} menu-item`}>

            <div className='background-image' style={{
                backgroundImage: `url(${backgroundImageUrl})`
            }}>
            </div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;
