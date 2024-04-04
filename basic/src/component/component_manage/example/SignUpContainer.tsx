import React from "react";
import InputBox from "./InputBox";
import "./style.css";
import "./common.css";

export default function SignUpContainer() {
  return (
    <div>
      <InputBox
        label="이메일"
        type="text"
        placeholder="이메일을 입력하세요"
        button="이메일 인증"
      />
    </div>
  );
}
