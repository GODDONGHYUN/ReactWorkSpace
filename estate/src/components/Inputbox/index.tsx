import React, { ChangeEvent } from "react";
import "./style.css";

export interface InputBoxProps {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  button?: string;
  buttonStatus?: boolean;
  onButtonClickHandler?: () => void;
  message?: string;
  error?: boolean;
}
export default function InputBox({
  label,
  type,
  value,
  placeholder,
  button,
  buttonStatus,
  onChangeHandler,
  onButtonClickHandler,
  message,
  error,
}: InputBoxProps) {
  const buttonClass = buttonStatus
    ? "input-primary-button"
    : "input-disable-button";
  const messageClass = "input-message " + (error ? "error" : "primary");

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
        {button && (
          <div className={buttonClass} onClick={onButtonClickHandler}>
            {button}
          </div>
        )}
      </div>
      <div className={messageClass}>{message}</div>
    </div>
  );
}
