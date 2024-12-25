import React, { useState } from "react";
import InputFormText from "./InputFormText";
import { useNavigate } from "react-router-dom";

function InputFormConteiner() {
  const [inputtype, setInputtype] = useState("password");
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function hendelFormSubmit(event) {
    event.preventDefault();
    console.log("submit");
    if (value) {
      navigate(`/play`, { state: { wordGiven: value } });
    }
  }
  function Inputonchangehendler(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  const onButtonclick = () => {
    console.log("btn clink");
    if (inputtype === "text") {
      setInputtype("password");
    } else {
      setInputtype("text");
    }
    console.log(inputtype);
  };

  return (
    <InputFormText
      inputtype={inputtype}
      Inputonchangehendler={Inputonchangehendler}
      hendelFormSubmit={hendelFormSubmit}
      onButtonclick={onButtonclick}
    />
  );
}

export default InputFormConteiner;
