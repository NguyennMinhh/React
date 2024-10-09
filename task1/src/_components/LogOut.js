import React from 'react';
import logout from '../img/ico_logout.png';

const LogOut = () => {
    console.log('logout here: ' + logout);
    return (
        <>
        <button className="MenuItem"><a href="#">
                <div className="flex btn-menu">
                    <div alt="Item Icon" class="ico-active">
                        <img src={ logout } className="ico-active"></img>
                    </div>
                    <div alt="Item name" className="vertical-align ">
                        Đăng xuất
                    </div>
                </div>
        </a></button>
        </>
    );
}

export default LogOut;