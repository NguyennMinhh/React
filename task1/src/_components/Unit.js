import React from "react";

const Unit = ({ props }) => {
    return (
      <div>
        {props.map(lesson => (
          <div key={lesson.id}>
            <h3>{lesson.title}</h3>
            <a href={lesson.link}>Go to lesson</a>
          </div>
        ))}
      </div>
    );
  };

export default Unit;