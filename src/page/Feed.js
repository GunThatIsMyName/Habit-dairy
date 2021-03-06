import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { firebaseDatabase } from "../firebase";
import { storyCollection } from "../utils/helps";
import { Empty, FeedItem } from "../componets";
import styled from "styled-components";

function Feed() {
  const { user } = useAppContext();
  const [list, setList] = useState([]);

  const getFireDb = () => {
    firebaseDatabase
      .collection(storyCollection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let newList = [];
        snap.forEach((item) => {
          newList.push({ ...item.data(), id: item.id });
        });
        setList(newList);
      });
  };

  useEffect(() => {
    getFireDb();
    return () => getFireDb();
  }, []);

  return (
    <Wrapper>
      {list &&
        list.map((item) => {
          return <FeedItem key={item.id} item={item} user={user} />;
        })}
      {list.length < 1 && <Empty />}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin: auto;
  padding: 2rem;
  @media screen and (max-width: 991px) {
    padding: 1rem;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default Feed;
