import React from 'react';
import '../App.css'; 

const MenuItem = ({img, title, link}) => {
    return (
        <button className="MenuItem">
            <div className="flex btn-menu">
                <img></img>
            </div>
        </button>
    );
}

export default MenuItem;