import React from "react";
import styled from "styled-components";
import { Hero, Usage } from "../componets";


function Home() {
  return (
    <Wrapper>
      <Hero  />
      <Usage />
    </Wrapper>
  );
}

const Wrapper = styled.section`
`;

export default Home;
