import React from "react";
import InputText from "../InputText/InputText";
import Button from "../Button/Button";

const InputFormText = ({value, Inputonchangehendler, hendelFormSubmit,onButtonclick ,inputtype }) => {
     
  return (
    <form onSubmit={hendelFormSubmit}>
      <div>
        <InputText
          onchangehendler={Inputonchangehendler}
          label={"Enter your prege"}
          placeholder="enter your task name here ..."
          type={inputtype}
          value={value}
        />
      </div>
      <div>
        <Button onclickk={onButtonclick} text= {inputtype === 'password' ? "Show" : "Hide" } styleType="primery" />
      </div>
      <div>
        <Button   type="submit" text="submit" styleType="success" />
      </div>
    </form>
  );
};

export default InputFormText;
