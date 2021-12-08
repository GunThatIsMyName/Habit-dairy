import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Empty() {
  return (
    <Wrapper>
      <h1>현재 등록된 꿈이 없습니다.</h1>
      <button>
        <Link to="/story">나의 꿈을 등록 하러가기.</Link>
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h1 {
    font-size: 2.5rem;
  }
`;

export default Empty;
