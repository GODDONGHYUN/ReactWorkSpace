import React from "react";

export default function Component() {
  // 함수형 컴포넌트의 return
  // * 해당 컴포넌트가 렌더링 할 요소를 지정 (반환)
  // * html 처럼 보이지만 html이 아님
  // * 여러가지 자바스크립트 ★연산자★를 사용할 수 있음
  // * 반드시 하나의 요소만 반환이 가능 (0개 X, 2개 이상 X)
  // * 하나의 컴포넌트가 다수의 요소를 반환하고자 하면 최상단에 해당 요소를 묶어주는 부모 요소를 포함해야함
  // * 부모 요소로 묶을 때 <></> 이용하여 의미없는 태그를 생성할 수 있음

  // ! 반드시 return 바로 뒤에 반환 요소가 존재해야함
  return (
    <div>
      <h1>Component</h1>
      <h1>Component</h1>
      <JsxComponent />
    </div>
  );
}

function JsxComponent() {
  // JSX (TSX)의 규칙
  // * 1. 반드시 하나의 요소를 반환 (div 요소 혹은 빈<> 요소)
  // * 2. 모든 태그 닫기
  // * 3. 속성들을 JSX로 지정되어있는 이름으로 사용해야함 (lowerCamelCase)
  return (
    <>
      <h1>첫 번째 페이지 입니다.</h1>
      <div>
        <img
          src="https://i.namu.wiki/i/yHMdZs8LhKDP0D0XmvNkWe4NplRU5BDyXiZNDk5BTOd9ON5KtykFiDO_Q7SDpQLA-q9Q4fyFKfzM3apcZnPGtg.webp"
          className="image-box"
          alt="pig"
        />
      </div>
    </>
  );
}
