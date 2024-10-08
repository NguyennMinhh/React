import React from 'react';


const MenuItem = ({img, title, link}) => {
    return (
        <button className="MenuItem"><a href={ link }>
                <div className="flex btn-menu">

                    <div alt="Item Icon" class="ico-active">
                        <img src={img} className="ico-active"></img>
                    </div>
                    <div alt="Item name" className="vertical-align">
                        { title }
                    </div>

                </div>
        </a></button>
    );
}

export default MenuItem;