import React from 'react';

const FormButton = ({img, label, link }) => {
  return (
      <button className="sunE-form-button flex"><a href={link}>
        {/* <img src={img ? {img} : null} className="ico-active"></img> */}
        {label}
      </a></button>
  );
};

export default FormButton;
