import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import UCR from '../../img/UCR.png';

export default function About({innerRef}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
        <br>
        </br>
        <br></br>
        <h1>About ME</h1>
            <p><span style={{color: info.baseColor}}> <span
                className={Style.green}></span> </span>
                {info.bio}
            </p>
            <br>
            </br>
            <p><span style={{color: info.baseColor}}> <span
                className={Style.green}></span> </span>
                {info.bio2}
            </p>
            <br>
            </br>
            <p><span style={{color: info.baseColor}}> <span
                classNasme={Style.green}></span> </span>
                {info.bio3}
            </p>

            <br>
            </br>
            <p><span style={{color: info.baseColor}}> <span
                classNasme={Style.green}></span> </span>
                {info.bio4}
            </p>


            <br>
            </br>
            <a href="https://www.linkedin.com/in/nathan-nguyen-a0a9481b8/details/featured/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', textDecoration: 'none' }}>
                RESUME
                </a>
            <br>
            </br>
            <br></br>
                <div class="education-container">
        <div class="education-details">
            <h1>My Education</h1>
            <div class="school-logo">
            <img src= {UCR} alt="UCR Logo" style= {{width: '90px'}}></img>
        </div>
            <ul>
            <li><strong>Institution:</strong> University of California Riverside, Riverside, CA</li>
                <li><strong>Degree:</strong> Bachelor of Science, Computer Engineering</li>
                <li><strong>Years:</strong> 2020 - 2024</li>
                <li><strong>GPA:</strong> Cumulative GPA: 3.4</li>
            </ul>
        </div>
    </div>

            <br>
            </br>
            <br></br>
            <h1> Technical Skills</h1>
            <p><span style={{color: info.baseColor}}>Languages <span
                className={Style.green}></span> </span> </p>
           
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Electrical Engineering Skills</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Soft Skills</p>
            <ul className={Style.skills}>
                {info.skills.softskills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>

            <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
        </>;
    }

    function skillsText() {
      //  return <>
           {/* <h1> Technical Skills</h1>
            <p><span style={{color: info.baseColor}}>Languages <span
                className={Style.green}></span> </span> </p>
           
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul><Terminal text={skillsText()}/>
        </>; */}
    }

    function miscText() {
     //   return <>
            {/* <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>      <Terminal text={miscText()}/>
        </>; */}
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()}/>
        
        </Box>
    )
}