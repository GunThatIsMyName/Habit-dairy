import React from "react";
import { astronaut } from "../utils/icons";
import { useAppContext } from "../context/AppContext";
import styled from "styled-components";

function Login() {
  const { handleLogin } = useAppContext();

  return (
    <Wrapper>

      <div className="login__img">
        <img className="login__img-content" src={astronaut} alt="alba-login" />
      </div>

      <div className="login__info">

        <h1>모두의 습관을 catch</h1>
        <h3>
          사람이 습관을 만들지만 나중엔 습관이 사람을 만든다.
          <br />- 한줄 명언.
        </h3>

        <button onClick={handleLogin}> 나의 습관 만들러 가기.</button>

      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-lightwhite);
  background-image: linear-gradient(315deg, #efecec 0%, #f2d9d7 74%);
  min-height: calc(100vh - 3rem);
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  .login__img {
    text-align: center;
    img {
      width: 35rem;
    }
  }
  .login__info {
    padding: 0 3rem;
    max-width: 500px;
    h1 {
      font-size: 3rem;
      font-family: var(--font-nanum);
      font-weight: bold;
      color: var(--color-orange);
    }
    h3 {
      margin: 2rem 0;
      font-size: 1.3rem;
      line-height: 2rem;
    }
    button {
      border-radius: 10px;
      border: 3px solid var(--color-orange);
      background: transparent;
      font-size: 1.2rem;
      padding: 8px 16px;
      cursor: pointer;
      transition: 0.3s linear;
      &:hover {
        background: var(--color-orange);
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login__img {
      margin-bottom: 2rem;
      img {
        width: 80%;
      }
    }
    .login__info {
      h1 {
        font-size: 2.5rem;
      }
      h3 {
        font-size: 1rem;
      }
      button {
        width: 100%;
      }
    }
  }
`;

export default Login;
