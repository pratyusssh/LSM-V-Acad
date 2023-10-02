import styled from "styled-components";
import disneyplayer from "./videos/PC.mp4"
import pixarplayer from "./videos/PE.mp4"
import marvelplayer from "./videos/UC.mp4"
import starwarsplayer from "./videos/1608229455-star-wars.mp4"
import nationalplayer from "./videos/CHAT.mp4"
import pc from "./images/CourseLogos/Program-Core.png"
import pe from "./images/CourseLogos/Program-Elective.png"
import uc from "./images/CourseLogos/University-Core.png"
import ue from "./images/CourseLogos/University-Elective.png"
import chat from "./images/CourseLogos/Vchat.png"
import { NavLink } from "react-router-dom";
const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
      <NavLink to="/Course/Program Core" activeClassName="selected">
        <img src={pc} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={disneyplayer} type="video/mp4" />
        </video>
      </NavLink>
      </Wrap>
      <Wrap>
      <NavLink to="/Course/Program Elective" activeClassName="selected">
        <img src={pe} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={pixarplayer} type="video/mp4" />
        </video>
        </NavLink>
      </Wrap>
      <Wrap>
      <NavLink to="/Course/University Core" activeClassName="selected">
        <img src={uc} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={marvelplayer} type="video/mp4" />
        </video>
        </NavLink>
      </Wrap>
      <Wrap>
      <NavLink to="/Course/University Elective" activeClassName="selected">
        <img src={ue} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={starwarsplayer} type="video/mp4" />
        </video>
      </NavLink>
      </Wrap>
      <Wrap onClick={()=>{window.open("https://v-testnet1010.web.app/","_blank")}}>
        <img src={chat} alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src={nationalplayer}
            type="video/mp4"
          />
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
margin-left:30px;
margin-right:30px;
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left:1px;
    opacity: 0;
    ${'' /* z-index: 0; */}
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;

export default Viewers;