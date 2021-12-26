import React from "react";
import styled from "styled-components";
import { HeroImage } from "../utils/icons";
import { BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Wrapper>
      <section className="hero">

        <div className="hero__column">
          <h1>건강한 습관을 위한 <br /> 커뮤니티</h1>
          <ul className="hero__box">
            <Link to="/story" className="hero__item">
              <span>나의 습관 만들러 가기</span>
              <BsChevronCompactRight />
            </Link>

            <Link to="/feed" className="hero__item">
              <span>세상 모든 습관 보러 가기</span>
              <BsChevronCompactRight />
            </Link>
          </ul>
        </div>

        <div className="hero__image">
          <img src={HeroImage} alt="hero-img" />
        </div>

      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 5rem 0;
  .hero {
    padding: 2rem;
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12rem;
    .hero__column {
      h1 {
        margin-top: 5rem;
        font-size: 3rem;
        color: var(--color-lemon);
      }
      .hero__box {
        margin: 5rem 0;
        a {
          display: flex;
          justify-content: space-between;
          box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 8%);
          padding: 1rem;
          margin-bottom: 1rem;
          border-radius: 5px;
          cursor: pointer;
          &:hover {
            box-shadow: 5px 5px 5px 2px rgb(0 0 0 / 18%);
          }
        }
      }
    }
    .hero__image {
      margin-left: auto;
      img {
        border-top-right-radius: 50%;
        border-top-left-radius: 20%;
        border-bottom-left-radius: 20%;
        border-bottom-right-radius: 20%;
      }
    }
  }
  @media screen and (max-width: 991px) {
    margin-top: 2rem;
    .hero {
      display: block;
      .hero__column {
        .hero__box {
          margin: 2rem 0;
        }
        h1 {
          margin: 0;
          font-size: 2rem;
        }
      }
      .hero__image {
        text-align: center;
        img {
          max-width: 500px;
          width: 100%;
        }
      }
    }
  }
`;

export default Hero;
