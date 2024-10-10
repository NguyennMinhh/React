import React from 'react';

import MainTitle from '../_components/MainTitle';
import ExerciseItem from '../_components/ExerciseItem';
import FormButton from '../_components/FormButton';

const Listening = () => {
  return (
    <>
      {/* Tiêu đề */}
      <div className="space-aligned">
        <div className="">
            <MainTitle title="Listening" />
        </div>
        <div className="">
          <FormButton label="Quay lại" />
        </div>
      </div>

      {/* Danh sách bài tập */}
      <div className="sunE-container-box">
        <ExerciseItem
          difficulty="medium"
          title="My school"
          description="Listen and match the information."
        />
        <ExerciseItem
          difficulty="medium"
          title="Stationery"
          description="Listen and fill in the sentences."
        />
      </div>
    </>
  );
};

export default Listening;
