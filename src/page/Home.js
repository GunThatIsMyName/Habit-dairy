import React from "react";
import styled from "styled-components";
import Hero from "../componets/Hero";
import Usage from "../componets/Usage";
function Home() {
  return (
    <Wrapper>
      <Hero />
      <Usage />
    </Wrapper>
  );
}

const Wrapper = styled.section`
`;

export default Home;
