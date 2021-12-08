import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useUserContext } from "../../context/UserContext";
import { dateFormat, likeRandom } from "../../utils/helps";
import Modal from "./Modal";

function FeedItem({ item, user }) {
  const {storyDelete,storyEdit}=useUserContext();
  const [selectedUrl, setSelectedUrl] = useState(null);

  const navigate = useNavigate();
  const handleModalOpen = () => {
    setSelectedUrl(item.url);
  };

  const handleDelete=()=>{
    storyDelete(item);
  }
  const handleEdit = ()=>{
    navigate("/story");
    storyEdit(item)
  }

  return (
    <>
    {/* modal open */}
      {selectedUrl && (
        <Modal setSelectedUrl={setSelectedUrl} selectedUrl={selectedUrl} />
      )}
    {/* FeedItem Components */}
      <Wrapper key={item.id}>
        <div className="feed__user">
          <img src={item.userInfo.image} alt={item.id} />
          <div className="feed__user__info">
            <h3>{item.userInfo.user}</h3>
            <h4>{dateFormat(item.createdAt && item.createdAt.seconds)}</h4>
          </div>
          {user.id === item.story.id && (
            <div className="feed__btn">
              <button onClick={handleEdit} >수정</button>
              <button onClick={handleDelete} >삭제</button>
            </div>
          )}
        </div>
        <div className="feed__main">
          <h1>{item.story.title}</h1>
          <p className="feed__description">{item.story.description}</p>
          <img
            onClick={handleModalOpen}
            src={item.url}
            alt={item.story.title}
          />
        </div>
        <div className="feed__etc">
          <div className="feed__thumbs">
            <FaThumbsUp />
            <span>{likeRandom()} 좋아요</span>
          </div>
          <div className="commetns">
            <span>{likeRandom()} 댓글</span>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.article`
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-color: #f0f2f5;
  border-radius: 10px;
  margin-bottom:2rem;
  position: relative;
  overflow:hidden;
  .feed__user {
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
        color: #65676b;
      }
    }
    .feed__btn {
      margin-left: auto;
      button {
        cursor: pointer;
        background-color: #3c4856;
        border-radius: 5px;
        color: #fff;
        margin-left: 1rem;
      }
    }
  }
  .feed__main {
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
  }
  .feed__etc {
    position:absolute;
    bottom:0;
    width:100%;
    background:#f0f2f5;
    display: flex;
    justify-content: space-between;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    padding: 1rem;
  }
  @media screen and (max-width: 768px) {
    .feed__user {
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
  }
`;

export default FeedItem;
