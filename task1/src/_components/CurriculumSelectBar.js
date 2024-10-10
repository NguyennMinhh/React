import React, { useState } from "react";
import { images } from '../img/index';

import CurriculumSundayEnglish from '../Static/CurriculumContext/CurriculumSundayEnglish';
import CurriculumPersonal from '../Static/CurriculumContext/CurriculumPersonal';
import CurriculumFavorite from "../Static/CurriculumContext/CurriculumFavorite";

const CurriculumSelectBar = () => {
    const [selectedTab, setSelectedTab] = useState('SundayEnglish')

    const renderTab = () => {
        switch(selectedTab) {
            case 'SundayEnglish':
                return <CurriculumSundayEnglish />

            case 'Personal':
                return <CurriculumPersonal />

            case 'Favorite':
                return <CurriculumFavorite />

            default:
                return null
        }
    }

    const onClickChangeSelectedTab = (selectedTab) => {
        setSelectedTab(selectedTab)
    }

    return ( 
        <div className="sunE-container-box">
            <div className="gtcn-menu-gr flex jc-left">
                <span onClick={() => onClickChangeSelectedTab('SundayEnglish')} 
                        className={selectedTab == 'SundayEnglish' ? 'active-tab' : ""}>SundayEnglish</span>
                    
                <span onClick={() => onClickChangeSelectedTab('Personal')} 
                        className={selectedTab == 'Personal' ? 'active-tab' : ""}>Cá nhân</span>
                
                <span onClick={() => onClickChangeSelectedTab('Favorite')} 
                        className={selectedTab == 'Favorite' ? 'active-tab' : ""}>Yêu thích</span>
            </div>
            <div className="flex ">
                {renderTab()}
            </div>
            
        </div>
     );
}
 
export default CurriculumSelectBar;