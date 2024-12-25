import React from "react";

const InputText = ({  type="text",label, placeholder = "enter input here" ,value ,onchangehendler}) => {
  return (
    <label className="">
        <span>{label}</span>
      <input
        className="p-2 w-full border-black border-2"
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onchangehendler} 
        
      />
    </label>
  );
};

export default InputText;
