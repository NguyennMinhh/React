import React from 'react';
import { images } from '../img';

import MainTitle from './MainTitle';
import ExerciseItem from './ExerciseItem';
import FormButton from './FormButton';

const SunERightContainer = () => {
  return (
    <div className="sunE-right-container">
      {/* Tiêu đề */}
      <div className="flex">
        <div>
          <MainTitle title="Listening" />
        </div>
        <div className="right-aligned">
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
      
    </div>
  );
};

export default SunERightContainer;
