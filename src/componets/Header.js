import React from "react";
import { Link } from "react-router-dom";

import { useAppContext } from "../context/AppContext";
import { headerList } from "../utils/helps";
import { newHabit} from "../utils/icons";

import styled from "styled-components";

function Header() {
  const { handleLogin, user, handleLogout } = useAppContext();

  const isLoggedIn = user && user.name !== "" && user.email !== "";

  return (
    <Wrapper>
      <Link to="/" className="header__link">
        <img className="header__logo" src={newHabit} alt="alba-logo" />
      </Link>
      {isLoggedIn && (
        <ul className="header__center">
          {headerList.map((item) => {
            return (
              <Link to={item.path} key={item.id} className="header__list">
                {item.icons}
                <h3>{item.text}</h3>
              </Link>
            );
          })}
        </ul>
      )}
      <div className="header__btn">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background: #fff;
  padding: 0.4rem 2rem;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  .header__link {
    display: flex;
    align-items: center;
    .header__logo {
      cursor: pointer;
    height: 2rem;
    margin-left: 2rem;
    transform: scale(3.5);
    }
  }
  .header__center {
    display: flex;
    font-size: 1.6rem;
    gap: 2rem;
    justify-content: center;
    .header__list {
      display: flex;
      column-gap: 1rem;
      text-transform: capitalize;
      border-bottom:3px solid transparent;
      &:hover{
        border-bottom:3px solid #222;
      }
    }
  }
  .header__btn {
    margin-left: auto;
    display: flex;
    align-items: center;
    img {
      margin-right: 1rem;
      height: 2.5rem;
      border-radius: 50%;
    }
    button {
      font-size: 1.3rem;
      border: 2px solid #f0850c;
      outline: none;
      background: transparent;
      padding: 8px 16px;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s linear;
      &:hover {
        background: #f0850c;
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .header__center {
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      color: #fff;
      justify-content: space-around;
      gap: 0;
      width: 100%;
      background: #FAAA48;
      z-index:100;
      .header__list{
        svg{
          font-size:2rem;
          margin:1rem;
        }
        h3{
          display:none;
        }
      }
    }
    .header__logo {
      height: 2rem;
    }
    .header__btn {
      img {
        display: none;
      }
      button {
        font-size: 1.2rem;
        padding: 5px 12px;
      }
    }
  }
`;

export default Header;
