import React, { useCallback, useState } from "react";
import _ from "lodash";

function Home() {
  const [searchText, setSearchText] = useState("");
  const [inputText, setInputText] = useState("");

  // 이게 아래와 같은 형태
  // const debounce = (callback, delay) => {
  //   // 클로저?
  //   let timerId = null;
  //   return (...args) => {
  //     if (timerId) clearTimeout(timerId);
  //     timerId = setTimeout(() => {
  //       callback(...args);
  //     }, [delay]);
  //   };
  // };

  const handleSearchText = useCallback(
    _.debounce((text) => {
      setSearchText(text);
    }, 2000),
    []
  );

  // 공통함수
  const handlerChange = (e) => {
    setInputText(e.target.value);
    handleSearchText(e.target.value);
  };
  return (
    <div>
      <h1>디바운싱 예제</h1>
      <input
        type="text"
        placeholder="입력값을 넣고 디바운싱 테스트를 해보세요"
        onChange={handlerChange}
      />
      <div>Search Text : {searchText}</div>
      <div>Input Text : {inputText}</div>
    </div>
  );
}

export default Home;
