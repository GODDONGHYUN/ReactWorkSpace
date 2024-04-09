import React from "react";
import "./style.css";

export interface InputBoxProps {
  label: string;
  type: string;
  placeholder: string;
  button?: string;
}
export default function InputBox({
  label,
  type,
  placeholder,
  button,
}: InputBoxProps) {
  return (
    <div className="input-box">
      <div className="input-label label">{label}</div>
      <div className="input-content-box">
        <input className="input" type={type} placeholder={placeholder} />
        {button && <div className="input-disable-button">{button}</div>}
      </div>
      <div className="input-message"></div>
    </div>
  );
}
