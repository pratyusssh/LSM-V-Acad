import React from 'react'
import './ProgramCore.css';
import db from '../firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Resource from './Resource';
const Course = () => {
    const { type } = useParams();
    const [courses, setcourses] = useState([]);
    var coursename="",coursecode="",books="",coursetype="",credit="",youtube="",github="",research="";
    useEffect(() => {
        var temp = []
        db.collection(`${type}`).onSnapshot((snapshot) => { snapshot.docs.map((doc) => { 
            temp.push(doc.data()) }); 
            setcourses(temp);
         });
    }, []);
    const form = document.getElementById('form');
    function myFunction() {
        var input = document.getElementById("myinput");
        var filter = input.value.toLowerCase();
        var nodes = document.getElementsByClassName('neon__card carding');
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].innerText.toLowerCase().includes(filter)) {
                nodes[i].style.display = "block";
            }
            else {
                nodes[i].style.display = "none";
            }
        }
    }
    useEffect(() => {
        courses.map((data)=>{
            console.log(data.Books);
            console.log(data.coursename);
            console.log(data.coursecode);
            console.log(data.Youtube);
            console.log(data.coursetype);
            console.log(data.github);
            console.log(data.credit);
            console.log(data.Syllabus);
            console.log(data.research);
            if(data.Books!=undefined)
            {
                data.Books.map((book)=>{console.log(book.name)});
                // books=data.Books;
            }
        })
    }, [courses])

    return (
        <div className="page">
            <div className="search">
                <form action="" id="form">
                    <input type="search" id="myinput" placeholder="" onChange={myFunction} />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
            </div>
            
                    <div className="neon bd-container" >
            {courses.map((vals)=>{
                {/* console.log(vals); */}
                console.log(type);
                var to="/Resource/"+vals.coursecode+"/"+type;
                return(
                <div className="neon__card carding">
                    <h1 className="neon__title">{vals.coursename}</h1>
                    <p className="neon__description">{vals.coursecode}</p>
                    <NavLink to={to} activeClassName="selected">
                    <a href="" className="neon__button">
                        <svg className="neon__button-icon" viewBox="0 0 48 48">
                            <circle cx="19" cy="18" r="18" stroke="black" stroke-width="3" fill="blanchedalmond" />
                        </svg>
                        Explore
                    </a>
                    </NavLink>
                </div>
                )
            })}
            </div>
            <div className="back">
            <NavLink to="/home">
            <svg viewBox="0 0 24 24" fill="currentColor" id="back">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.835 12.007l.002.354c.012 1.404.096 2.657.242 3.451 0 .015.16.802.261 1.064.16.38.447.701.809.905a2 2 0 00.91.219c.249-.012.66-.137.954-.242l.244-.094c1.617-.642 4.707-2.74 5.891-4.024l.087-.09.39-.42c.245-.322.375-.715.375-1.138 0-.379-.116-.758-.347-1.064-.07-.099-.18-.226-.28-.334l-.379-.397c-1.305-1.321-4.129-3.175-5.593-3.79 0-.013-.91-.393-1.343-.407h-.057c-.665 0-1.286.379-1.603.991-.087.168-.17.496-.233.784l-.114.544c-.13.874-.216 2.216-.216 3.688zm-6.332-1.525C3.673 10.482 3 11.162 3 12a1.51 1.51 0 001.503 1.518l3.7-.328c.65 0 1.179-.532 1.179-1.19 0-.658-.528-1.191-1.18-1.191l-3.699-.327z" />
                </svg>
                Go Back
            </NavLink>  
            </div>
        </div>
    )
}

export default Course