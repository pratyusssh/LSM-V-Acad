import styled from "styled-components"
import React from 'react'
import ImgSlider from './ImgSlider'
import Viewers from "./Viewers"
import Header from "./Header";
import Particles1 from "./Particles1";
import vid from "./images/back-video.mp4"
import './Home.css'
const Home = () => {
 
  return (
    <>
    <Header></Header>
    <div className="container">

    <Container>
       <ImgSlider></ImgSlider>
     <Viewers></Viewers>
    </Container>
    </div>
    </>
  )
}

export default Home
const Container = styled.div`
    position:relative;
    ${'' /* min-height: calc(100vh-250px); */}
    min-height: 100vh;
    overflow-x:hidden;
    display:block;
    top:72px;
    padding: 0 calc(3.5vw+5px);

    &:after{
        content:"";
        position:absolute;
        inset:0px;
        opacity:1;
        z-index:-1;
    }


`;