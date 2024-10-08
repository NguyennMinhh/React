import React from 'react';

const ExerciseItem = ({ difficulty, title, description }) => {
  return (
    <div className="student-exercise-item">
      <span className={`exercise-difficulty ${difficulty}`}>{difficulty}</span>
      <div className="student-exercise-item-context">
        <a href="#">
          <h3>{title}</h3>
          <p>{description}</p>
        </a>
      </div>
    </div>
  );
};

export default ExerciseItem;
