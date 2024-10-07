import React from 'react';
import MenuItem from './MenuItem';
import logo from './img/logo_home.png';

const SunEsideBar = () => {
    return (
        <div className="SunE-sidebar">
            <div className="top">
                <SunElogo />
            </div>
            <div className="middle">
                <MenuItem img="task1/src/img/ico_book_active.png"   title="Trang chủ"   link="https://sundayenglish.com/student"/>
                <MenuItem img="task1/src/img/ico_home.png"          title="Giáo trình"  link="https://sundayenglish.com/student/curriculum"/>
                <MenuItem img="task1/src/img/ico_luyenthi.png"      title="Luyện thi"   link="https://sundayenglish.com/student/exam-test"/>
                <MenuItem img="task1/src/img/ico_thanhtich.png"     title="Thành tích"  link="https://sundayenglish.com/student/assessment"/>
                <MenuItem img="task1/src/img/ico_xemthem.png"       title="Thêm"        link="https://sundayenglish.com/student/more"/>
            </div>
            <div className="bottom">
                {/* <MenuItem /> */}
            </div>
        </div>
    );
}

const SunElogo = () => {
    return (
        <div className="sunE-logo flex">
            <a href="https://sundayenglish.com/student">
                <img src={logo} alt="Sunday English logo" />
            </a>
        </div>
    );
}

export default SunEsideBar;
