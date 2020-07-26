import React from 'react';
import './menu-item.scss';
import {withRouter} from "react-router-dom";

const MenuItem = ({title, backgroundImageUrl, size, linkUrl, history, match, location}) => {
    // console.log(history);
    // console.log(match);
    // console.log(location);
    return (
        <div className={`${size} menu-item`} onClick = {() => history.push(linkUrl)}>

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

export default withRouter(MenuItem);
