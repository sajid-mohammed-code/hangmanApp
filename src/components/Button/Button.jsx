// import { getButtonStyle } from "./Btton_utiliti";

import { getButtonStyle } from "./getButtonstyle.js";

const Button = ({ text, onclickk ,styleType,type='button'}) => {
  return (
    <div>
      <button
      type={type}
        onClick={onclickk}
        className={`p-4  ${getButtonStyle(styleType)}  rounded-2xl m-2`}
      >
        {text}
      </button>
    </div>
  );
  
}; 
 

export default Button; 