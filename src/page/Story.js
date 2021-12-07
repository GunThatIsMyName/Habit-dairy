import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";
import { useUserContext } from "../context/UserContext";

function Story() {
  const { user } = useAppContext();
  const {storyChange,storySubmit}=useUserContext();
  return (
    <Wrapper>
      <form onSubmit={storySubmit} className="story">
        <div className="story__title">
          <h1>새로운 꿈 만들기</h1>
          <p>사진을 업로드 해서 나의 꿈을 보여주세요. </p>
        </div>
        <div className="story__main">
          <div className="main__owner">
            <h3 className="owner__name">작성자</h3>
            <div className="owner__info">
              <img src={user.image} alt={user.name} />
              <span>{user.name}</span>
            </div>
          </div>
          <div className="main__title">
            <h3 className="title__name">제목</h3>
            <input required onChange={storyChange} name="title" type="text" placeholder="꿈의 제목을 입력하세요." />
          </div>
        </div>
        <div className="story__description">
          <h3 className="description__name">설명</h3>
          <p>
            1. 당신이 가장 즐기는 것은 무엇인가?
            <br />
            2. 당신이 최선을 다해 하는 일은무엇인가? <br />
            3. 당신이 더 배우고 싶은 것은 무엇인가? <br />
          </p>
          <textarea
          required
          name="description"
          onChange={storyChange}
            maxLength={400}
            type="text"
            placeholder="꿈의 설명을 입력해 주세요  "
          />
        </div>
        <h3 className="image__upload">사진 올리기</h3>
        <input onChange={storyChange} multiple name="images" className="image__uploader" type="file" />
        <div className="story__photo">
          <img
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="aaa"
          />
          <img
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="aaa"
          />
          <img
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="aaa"
          />
        </div>
        <div className="story__submit">
          <button type="submit" className="story__btn">나의 꿈 올리기.</button>
        </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: #f3f2ef;
  min-height: 70vh;
  padding: 4rem;
  .story {
    max-width: 1000px;
    margin: auto;
    .story__title {
      margin: 2rem 0;
      h1 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 12px;
        color: #8b949e;
      }
    }
    .story__main {
      display: flex;
      gap: 2rem;
      margin: 2rem 0;
      .main__owner {
        .owner__name {
          margin-bottom: 1rem;
        }
        .owner__info {
          display: flex;
          align-items: center;
          border: 1px solid #c1d1d9;
          padding: 6px;
          border-radius: 5px;
          img {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            margin-right: 0.5rem;
          }
        }
      }
      .main__title {
        .title__name {
          margin-bottom: 1rem;
        }
        input {
          padding: 8px;
          border-radius: 5px;
        }
      }
    }
    .story__description {
      p {
        font-size: 12px;
        color: #8b949e;
      }
      textarea {
        margin: 1rem;
        width: 80%;
        padding: 5px;
        font-size: 1.5rem;
        height: 10rem;
        border: none;
        resize: none;
      }
    }
    .image__uploader,
    .image__upload {
      margin-bottom: 1rem;
    }
    .story__photo {
      display: flex;
      width: 100%;
      overflow-x: auto;
      gap: 1rem;
      img {
        border-radius: 5px;
        width: 200px;
        height: 150px;
        object-fit: cover;
      }
    }
    .story__submit {
      margin: 1rem auto;
      text-align: center;
      .story__btn {
        width: 40%;
        border-radius: 5px;
        cursor: pointer;
        background-color: #f08613;
        color: #fff;
        transition: 0.3s linear;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    padding: 2rem;
    .story {
      .story__title {
        margin: 1rem 0;
        h1 {
          font-size: 1.2rem;
        }
      }
      .story__main {
        gap: 1rem;
        display: block;
        margin: 1rem 0;
        .main__owner {
          margin-bottom: 0.5rem;
          .owner__name {
            margin-bottom: 0.4rem;
          }
          .owner__info {
            width: fit-content;
          }
        }
        .main__title {
          .title__name {
            margin-bottom: 0.4rem;
          }
        }
      }
      .story__description {
        textarea {
          height: 5rem;
          font-size: 1rem;
        }
      }
      .story__photo {
        img {
          height: 100px;
          width: 140px;
        }
      }
    }
  }
`;

export default Story;
