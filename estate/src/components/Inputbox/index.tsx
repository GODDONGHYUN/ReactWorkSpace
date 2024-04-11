import React, { ChangeEvent } from "react";
import "./style.css";

export interface InputBoxProps {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  button?: string;
}
export default function InputBox({
  label,
  type,
  value,
  placeholder,
  button,
  onChangeHandler,
}: InputBoxProps) {
  return (
    <div className="input-box">
      <div className="input-label label">{label}</div>
      <div className="input-content-box">
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={value}
        />
        {button && <div className="input-disable-button">{button}</div>}
      </div>
      <div className="input-message"></div>
    </div>
  );
}
