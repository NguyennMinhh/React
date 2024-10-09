import React from 'react';

import MainTitle from "../_components/MainTitle";
import FormButton from "../_components/FormButton";

const Curriculum = () => {
    return ( 
        <>
        {/* Tiêu đề */}
        <div className="flex one-line">
            <div>
                <MainTitle title="Chọn giáo trình" />
            </div>
            <div className="right-aligned">
                <FormButton label="Quay lại" />
            </div>
        </div>
        </>
     );
}
 
export default Curriculum;