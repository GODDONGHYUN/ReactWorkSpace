import React, { ChangeEvent, useState } from "react";
import "./style.css";

import SignInBackground from "assets/image/sign-in-background.png";
import SignUpBackground from "assets/image/sign-up-background.png";
import InputBox from "components/Inputbox";

type AuthPage = "sign-in" | "sign-up";

interface SnsContainerProps {
  title: string;
}

//                                    function                                   //
function SnsContainer({ title }: SnsContainerProps) {
  const onSnsButtonClickHandler = (type: "kakao" | "naver") => {
    alert(type);
  };

  return (
    <div className="authentication-sns-container">
      <div className="sns-container-title label">{title}</div>
      <div className="sns-button-container">
        <div
          className="sns-button kakao-button"
          onClick={() => onSnsButtonClickHandler("kakao")}
        ></div>
        <div
          className="sns-button naver-button"
          onClick={() => onSnsButtonClickHandler("naver")}
        ></div>
      </div>
    </div>
  );
}

interface Props {
  onLinkClickHandler: () => void;
}

// 																				component																				//
function SignIn({ onLinkClickHandler }: Props) {
  //                                    state                                   //
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //                                   event handler                                   //

  const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSignInButtonClickHandler = () => {
    alert(`아이디 : ${id} / 비밀번호 : ${password}`);
    setId("");
    setPassword("");
  };

  //                                    render                                   //

  return (
    <div className="authentication-contents">
      <div className="authentication-input-container">
        <InputBox
          label={"아이디"}
          type={"text"}
          value={id}
          placeholder={"아이디를 입력하세요."}
          onChangeHandler={onIdChangeHandler}
        />
        <InputBox
          label={"비밀번호"}
          type={"password"}
          value={password}
          placeholder={"비밀번호를 입력하세요."}
          onChangeHandler={onPasswordChangeHandler}
        />
      </div>
      <div className="authentication-button-container">
        <div
          className="primary-button full-width"
          onClick={onSignInButtonClickHandler}
        >
          로그인
        </div>
        <div className="text-link" onClick={onLinkClickHandler}>
          회원가입
        </div>
      </div>
      <div className="short-divider"></div>
      <SnsContainer title="SNS 로그인" />
      <div className="authentication-sns-container"></div>
    </div>
  );
}

// ====================================================================================================

// 																				component																				//
function SignUp({ onLinkClickHandler }: Props) {
  //                                    state                                   //
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [authNumber, setAuthNumber] = useState<string>("");

  const [idButtonStatus, setIdButtonStatus] = useState<boolean>(false);
  const [emailButtonStatus, setEmailButtonStatus] = useState<boolean>(false);
  const [authNumberButtonStatus, setAuthNumberButtonStatus] =
    useState<boolean>(false);

  //                                   event handler                                   //
  const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setId(event.target.value);
    setIdButtonStatus(value !== "");
  };

  const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onCheckPasswordChangeHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setCheckPassword(event.target.value);
  };

  const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(event.target.value);
    setEmailButtonStatus(value !== "");
  };

  const onAuthNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAuthNumber(event.target.value);
    setAuthNumberButtonStatus(value !== "");
  };

  const onIdButtonClickHandler = () => {
    if (!idButtonStatus) return;
    alert(id);
  };

  const onEmailButtonClickHandler = () => {
    if (!emailButtonStatus) return;
    alert(email);
  };

  const onAuthNumberButtonClickHandler = () => {
    if (!authNumberButtonStatus) return;
    alert(authNumber);
  };

  const onSignUpButtonClickHandler = () => {};

  //                                    render                                   //
  return (
    <div className="authentication-contents">
      <SnsContainer title="SNS 회원가입" />
      <div className="short-divider"></div>
      <div className="authentication-input-container">
        <InputBox
          label="아이디"
          type="text"
          value={id}
          placeholder="아이디를 입력해주세요."
          onChangeHandler={onIdChangeHandler}
          button="중복 확인"
          buttonStatus={idButtonStatus}
          onButtonClickHandler={onIdButtonClickHandler}
        />

        <InputBox
          label="비밀번호"
          type="password"
          value={password}
          placeholder="비밀번호를 입력해주세요."
          onChangeHandler={onPasswordChangeHandler}
        />

        <InputBox
          label="비밀번호 확인"
          type="password"
          value={checkPassword}
          placeholder="비밀번호를 입력해주세요."
          onChangeHandler={onCheckPasswordChangeHandler}
        />

        <InputBox
          label="이메일"
          type="text"
          value={email}
          placeholder="이메일을 입력해주세요."
          onChangeHandler={onEmailChangeHandler}
          button="이메일 인증"
          buttonStatus={emailButtonStatus}
          onButtonClickHandler={onEmailButtonClickHandler}
        />

        <InputBox
          label="인증번호"
          type="text"
          value={authNumber}
          placeholder="인증번호 4자리를 입력해주세요."
          onChangeHandler={onAuthNumberChangeHandler}
          button="인증번호 확인"
          buttonStatus={authNumberButtonStatus}
          onButtonClickHandler={onAuthNumberButtonClickHandler}
        />
      </div>
      <div className="authentication-button-container">
        <div
          className="primary-button full-width"
          onClick={onSignUpButtonClickHandler}
        >
          회원가입
        </div>
        <div className="text-link" onClick={onLinkClickHandler}>
          로그인
        </div>
      </div>
    </div>
  );
}

// ====================================================================================================

export default function Authentication() {
  const [page, setPage] = useState<AuthPage>("sign-in");

  const onLinkClickHandler = () => {
    if (page === "sign-in") setPage("sign-up");
    else setPage("sign-in");
  };

  const AuthenticationContents =
    page === "sign-in" ? (
      <SignIn onLinkClickHandler={onLinkClickHandler} />
    ) : (
      <SignUp onLinkClickHandler={onLinkClickHandler} />
    );

  const imageBosStyle = {
    backgroundImage: `url(${
      page === "sign-in" ? SignInBackground : SignUpBackground
    })`,
  };

  return (
    <div id="authentication-wrapper">
      <div className="authentication-image-box" style={imageBosStyle}></div>
      <div className="authentication-box">
        <div className="authentication-container">
          <div className="authentication-title h1">
            {"임대 주택 가격 서비스"}
          </div>
          {AuthenticationContents}
        </div>
      </div>
    </div>
  );
}
