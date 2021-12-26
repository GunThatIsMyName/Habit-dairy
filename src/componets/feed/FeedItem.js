import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FaThumbsUp } from "react-icons/fa";
import { useUserContext } from "../../context/UserContext";
import { likeRandom } from "../../utils/helps";
import { FeedMain, FeedUser, Modal } from "..";

import styled from "styled-components";

function FeedItem({ item, user }) {
  const { storyDelete, storyEdit } = useUserContext();
  const [selectedUrl, setSelectedUrl] = useState(null);

  const navigate = useNavigate();
  const handleModalOpen = () => {
    setSelectedUrl(item.url);
  };

  const handleDelete = () => {
    storyDelete(item);
  };
  const handleEdit = () => {
    navigate("/story");
    storyEdit(item);
  };

  return (
    <>
      {/* modal open */}
      {selectedUrl && (
        <Modal setSelectedUrl={setSelectedUrl} selectedUrl={selectedUrl} />
      )}

      {/* FeedItem Components */}
      <Wrapper key={item.id}>
        <FeedUser
          item={item}
          userId={user.id}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          d
        />
        <FeedMain item={item} handleModalOpen={handleModalOpen} />

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
  background-color: var(--color-almostwhite);
  border-radius: 10px;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  .feed__etc {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #f0f2f5;
    display: flex;
    justify-content: space-between;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 1rem;
  }
`;

export default FeedItem;
