import React from 'react'
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PG1 from "./images/Slider/newSlide/2.png";
import PG2 from "./images/Slider/newSlide/1.png";
import PG3 from "./images/Slider/newSlide/3.png";
import PG4 from "./images/Slider/newSlide/4.png";
import PG5 from "./images/Slider/PAGE5.png";
const ImgSlider = () => {
 let settings={
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow:1,
     SlidesToScroll:1,
     autoplay:true
 }
  return (<>

    <Carousel {...settings}>
        <Wrap>
           <a>

           <img src={PG1}/>
           </a> 
        </Wrap>
        <Wrap>
        <a>
            <img src={PG2}/>

        </a>

        </Wrap>
        <Wrap>
        <a>

            <img src={PG3}/>
        </a>
        </Wrap>
        <Wrap>
        <a>

            <img src={PG4}/>
        </a>
        {/* <a>

            <img src={PG5}/>
        </a> */}
        </Wrap>
    </Carousel>
  </>
    )
}

export default ImgSlider
const Carousel= styled(Slider)`
    margin-top: 20px;
    & > button{
        opacity:0;
        height:100%;
        width:5vw;
        z-index:1;
        &: hover{
        opacity:1;
        transition:opacity 0.2s easy 0s;
    }
    }
   
    ul li button {
        &:before{
            font-size: 10px;
            color: rgb(150,158,171);
        }
    }
    li.slick-active button::before{
        color:white;
    }
    .slick-list{
        overflow:initial;
    }
    button {
        z-index:1;
    }
    .slick-prev{
        left: -75px;
    }
    .slick-next{
        right:-75px;
    }
`
const Wrap= styled.div`
    border-radius: 4px;
    cursor:pointer;
    position:realtive;
    a{
        border-radius: 4px;
        box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;
        cursor:poinetr;
        display:block;
        padding:4px;
    
    img{
        width:100%;
        height:100%;                
    }
    &:hover{
        padding:0;
            border: 4px solid rgba(201,77,255,0.6);
            transition-duration: 300ms;
        }
    }
`;