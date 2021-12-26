import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Usage() {
  return (
    <Wrapper>
      <section className="usage">
        <div className="usage__image">
          <img
            src="https://cdn.dribbble.com/users/3585651/screenshots/9899589/media/19473a5b9ff0dfb6b5acbb520355f9a0.png"
            alt="dream-img"
          />
        </div>
        <div className="usage__info">
          <h3>아름다운 날개를 펼쳐라</h3>
          <p>
          다른 사람이 무엇을 하는지 신경 쓰지말라. <br />
            더 나은 당신을 위해 노력하고 <br />
            매일 당신의 기록을 깨뜨려라 <br />
            <br />
            일어나서 다시 한번 부딫혀보자 <br />
          </p>

          <Link to="/story" className="hero__item">

          <button>건강한 습관 만들기.</button>
          </Link>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: #ffe7d5;
  min-height: 60vh;
  padding: 5rem 2rem 10rem 2rem;
  .usage {
    margin: auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
    .usage__image {
      img {
        max-width: 600px;
        max-height: 600px;
        border-bottom-left-radius: 20%;
        border-bottom-right-radius: 11%;
        border-top-right-radius: 20%;
        border-top-left-radius: 60%;
      }
    }
    .usage__info {
      h3 {
        margin: 2rem 0;
        font-size: 3rem;
      }
      p {
        line-height: 2rem;
        margin-bottom: 2rem;
      }
      button {
        cursor: pointer;
        width: 50%;
        border: 1px solid #f05a21;
        border-radius: 5px;
        color: #f05a21;
        font-size: 1.4rem;
        transition: 0.3s linear;
        &:hover {
          background: #f05a21;
          color: #fff;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    padding:5rem 1rem;
    .usage {
      display: flex;
      text-align:center;
      flex-direction: column-reverse;
      .usage__image {
        text-align: center;
        img {
          width: 100%;
        }
      }
      .usage__info {
        h3{
          font-size:1.5rem;
        }
        button {
          font-size: 1.2rem;
          width: 100%;
        }
      }
    }
  }
`;

export default Usage;
