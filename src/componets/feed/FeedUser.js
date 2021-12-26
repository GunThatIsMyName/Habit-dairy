import React from "react";
import styled from "styled-components";
import { dateFormat } from "../../utils/helps";

function FeedUser({ item, handleDelete, handleEdit, userId }) {
  return (
    <UserWrapper className="feed__user">
      <img src={item.userInfo.image} alt={item.id} />
      <div className="feed__user__info">
        <h3>{item.userInfo.user}</h3>
        <h4>{dateFormat(item.createdAt && item.createdAt.seconds)}</h4>
      </div>
      {userId === item.story.id && (
        <div className="feed__btn">
          <button onClick={handleEdit}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      )}
    </UserWrapper>
  );
}

const UserWrapper = styled.div`
  padding: 1rem;
  display: grid;
  align-items: center;
  grid-gap: 2rem;
  grid-template-columns: auto 1fr auto;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  .feed__user__info {
    h3 {
      font-size: 1.3rem;
      margin-bottom: 4px;
    }
    h4 {
      color: var(--color-almostgrey);
    }
  }
  .feed__btn {
    margin-left: auto;
    button {
      cursor: pointer;
      background-color: var(--color-blue);
      border-radius: 5px;
      color: #fff;
      margin-left: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    grid-gap: 0.5rem;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
    .feed__user__info {
      h3 {
        font-size: 1rem;
      }
    }
    .feed__btn {
      display: flex;
      gap: 5px;
      flex-direction: column;
      button {
        padding: 3px 20px;
      }
    }
  }
`;

export default FeedUser;
