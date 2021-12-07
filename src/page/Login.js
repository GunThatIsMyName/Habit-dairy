import React from "react";
import { AlbaLogin } from "../utils/icons";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";

function Login() {
  const { handleLogin } = useAppContext();
  return (
    <Wrapper>
      <div className="login__img">
        <img className="login__img-content" src={AlbaLogin} alt="alba-login" />
      </div>
      <div className="login__info">
        <h1>모두의 꿈을 Respect</h1>
        <h3>
          가장 많은것을 이루는 자들은 아마 가장 많은 꿈을 꾸는 자들이다.
          <br />- Stephen Leacock.
        </h3>
        <button onClick={handleLogin}> 나의 꿈 펼치러 가기.</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: calc(100vh);
  position: absolute;
  top: 0;
  z-index: -1;
  background: #f7f7f7;
  width: 100%;
  height: 100%;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  .login__img {
    text-align: center;
    img {
      width: 20rem;
    }
  }
  .login__info {
    padding: 0 3rem;
    max-width: 500px;
    h1 {
      font-size: 3rem;
      font-family: "Nanum Pen Script", cursive;
      font-weight: bold;
      color: #f0850c;
    }
    h3 {
      margin: 2rem 0;
      font-size: 1.3rem;
      line-height: 2rem;
    }
    button {
      border-radius: 10px;
      border: 3px solid #f0850c;
      background: transparent;
      font-size: 1.2rem;
      padding: 8px 16px;
      cursor: pointer;
      transition: 0.3s linear;
      &:hover {
        background: #f0850c;
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 768px) {
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
