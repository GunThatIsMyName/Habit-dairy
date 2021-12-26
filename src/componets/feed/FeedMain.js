import React from "react";
import styled from "styled-components";

function FeedMain({ item, handleModalOpen }) {
  return (
    <MainWrapper className="feed__main">
      <h1>{item.story.title}</h1>
      <p className="feed__description">{item.story.description}</p>
      <img onClick={handleModalOpen} src={item.url} alt={item.story.title} />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  h1 {
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  p {
    padding: 0 1rem;
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }
`;

export default FeedMain;
