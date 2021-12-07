import React from "react";
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
          <h3>라라라라</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            deserunt quibusdam, inventore quaerat accusantium consequatur totam
            distinctio sunt dolor accusamus adipisci culpa eos. Itaque ratione
            vel eum voluptatibus suscipit debitis.
          </p>
          <button>
                자신감 만들러 가기
          </button>
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
    .usage__info{
        h3{
            margin:2rem 0;
            font-size:3rem;
        }
        p{
            line-height:2rem;
            margin-bottom:2rem;
        }
        button{
            cursor: pointer;
            width:50%;
            border:1px solid #F05A21;
            border-radius:5px;
            color:#F05A21;
            font-size:1.4rem;
            transition:0.3s linear;
            &:hover{
                background:#F05A21;
                color:#Fff;
            }
        }
    }
  }
  @media screen and (max-width:991px){
      .usage{
          display:flex;
          flex-direction:column-reverse;
          .usage__image{
              text-align:center;
              img{
                  width:100%;
              }
          }
          .usage__info{
              button{
                  font-size:1.2rem;
                  width:100%;
              }
          }
      }
  }
`;

export default Usage;
