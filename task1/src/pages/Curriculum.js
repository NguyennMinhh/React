import React from 'react';
import { images } from '../img/index'

import MainTitle from "../_components/MainTitle";
import FormButton from "../_components/FormButton";
import CurriculumSelectBar from '../_components/CurriculumSelectBar';

const Curriculum = () => {


    return ( 
        <>
            {/* Tiêu đề */}
            <div className="space-aligned">
                <div>
                    <MainTitle title="Chọn giáo trình" />
                </div>
                <div className="flex jc-right">
                    <FormButton label="Lọc" img={images.ICON_FILTER} link="#" />
                    <FormButton label="Quay lại" link="#"/>
                </div>
            </div>

            {/* Thanh Navigation Bar */}
            <div className="">
                <CurriculumSelectBar />
            </div>

        </>
     );
}
 
export default Curriculum;