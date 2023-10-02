import Particles1 from './Particles1';
import image from './images/V-academics (2).png';
import image1 from './images/V-academics (7).png';
import loginimg from './images/V-academics (8).png';
import loginimg1 from './images/V-academics (9).png';
import './Login.css'
import { useState } from 'react';
import { useEffect } from 'react';
import {Fade}from 'react-reveal';
import {ClimbingBoxLoader, FadeLoader} from 'react-spinners';
import {auth,provider} from '../firebase';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {selectUserName,
selectUserPhoto,
selectUserLoginDetails,
setUserLoginDetails,
setSignOutState,} from "../features/user/userSlice";
const Login = () => {
  const [img, setimg] = useState(loginimg);
  console.log(img);
  const [show, setshow] = useState(false);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setshow(true);
    }, 5000);  
  }, []);
  const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
});
const dispatch= useDispatch();
  const history= useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto= useSelector(selectUserPhoto);
  useEffect(()=>{
    auth.onAuthStateChanged(async(user)=>{
      if(user){
        setUser(user)
        history("/home");
      }
    })
  },[userName]);
  const handle= ()=>{
    if(!userName){
    auth.signInWithPopup(provider).then((result)=>{
      setUser(result.user);
      console.log(result.user);
      console.log(result.user.photoURL);
    }).catch((error)=>{
      alert(error.message);
    });
  }
   else if(userName){
    auth.signOut().then(()=>{
      dispatch(setSignOutState())
      history('/')
    }).catch((error)=>{
      alert(error.message);
    })
   }
  }
  const setUser=(user)=>{
    console.log(user);
    dispatch(
      setUserLoginDetails({

        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }
      )
    )

  }
  
  return (
    <div className='Logindiv'>
    <div className="cursor"></div>
  <Fade top>

    {
      loading&&
    <Fade>
      <ClimbingBoxLoader color={"#BABABA"} loading={loading}  size={25} style={{}}/>
      </Fade>
    }
  </Fade>
    
    {show&& <> 
  <Fade left>
     
    <img src={image} alt="" className='logo'/>
    </Fade>
    <Fade right>
    <div className='logindiv' style={{}}>
    
    <img src={img} alt="" className='loginbtn' style={{width:'12%',zIndex:'999',cursor:'none'}} onMouseEnter={()=>{
      setimg(loginimg1);
    }}
    onMouseLeave={()=>{
      setimg(loginimg);
    }}
    onClick={handle}
    />
      </div>
    </Fade>
      </>}
      <Particles1></Particles1>
      
    </div>
  )
}

export default Login;