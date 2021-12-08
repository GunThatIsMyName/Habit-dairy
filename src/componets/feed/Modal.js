import React from 'react'
import styled from 'styled-components'

function Modal({selectedUrl,setSelectedUrl}) {
    return (
        <Wrapper  onClick={()=>setSelectedUrl(null)}>
            <img src={selectedUrl} alt="ModalImg" />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    position:fixed;
    top:0;
    z-index:100;
    left:0;
    width:100%;
    height:100vh;
    background-color:#000000ce;
    text-align:center;
    img{
        width:50%;
        max-height:80vh;
        object-fit:cover;
        margin:3rem auto;
    }
    @media screen and (max-width: 768px) {
        img{
        margin:8rem auto;
        }
  }
`;

export default Modal
