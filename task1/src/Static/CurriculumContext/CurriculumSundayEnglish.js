import React from "react";
import jsonData from "./TeacherCurriculum.json"

const CurriculumSundayEnglish = () => {
    
    return (
        <>
            <div className="flex-column scroll">
                <BoxGiaoTrinh   title="Nâng cao năng lực lớp 6"
                                context= {<Unit props={jsonData.giaotrinh[0]["Nâng cao năng lực lớp 6"]} />} />
                <BoxGiaoTrinh   title="Nâng cao năng lực lớp 7"
                                context= {<Unit props={jsonData.giaotrinh[0]["Nâng cao năng lực lớp 7"]} />} />
            </div>
            <div className="flex-column scroll">
                
            </div>
        </>
    );
}
 
export default CurriculumSundayEnglish;