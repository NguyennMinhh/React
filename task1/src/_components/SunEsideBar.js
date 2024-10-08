import React from 'react';
import { images } from '../img';

import MenuItem from './MenuItem'; 
import SunElogo from './SunElogo';
import LogOut from './LogOut';

const SunEsideBar = () => {
    return (
        <div className="SunE-sidebar">
            <div className="top">
                <SunElogo />
            </div>
            <div className="middle">
                <MenuItem 
                    img={images.ICON_HOME} 
                    title="Trang chủ" 
                    link="https://sundayenglish.com/student"
                />
                <MenuItem 
                    img={images.ICON_BOOK_ACTIVE} 
                    title="Giáo trình" 
                    link="https://sundayenglish.com/student/curriculum"
                />
                <MenuItem 
                    img={images.ICON_LUYENTHI}
                    title="Luyện thi" 
                    link="https://sundayenglish.com/student/exam-test"
                />
                <MenuItem 
                    img={images.ICON_THANHTICH} 
                    title="Thành tích" 
                    link="https://sundayenglish.com/student/assessment"
                />
                <MenuItem 
                    img={images.ICON_XEMTHEM} 
                    title="Thêm" 
                    link="https://sundayenglish.com/student/more"
                />
            </div>
            <div className="bottom">
                <LogOut />
            </div>
        </div>
    );
}


export default SunEsideBar;
