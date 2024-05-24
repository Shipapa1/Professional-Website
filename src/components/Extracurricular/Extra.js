import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import Hike from '../../img/Hike.jpg';
import Snow from '../../img/Snow.png';

export default function Extracurricular({innerRef}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
        <br>
        </br>
        <br></br>
        <h1>Interests!</h1>
        <br></br>
        <h2>Hiking</h2>
    
            <p><span style={{color: info.baseColor}}>$ <span
                className={Style.green}></span> </span>
                {info.bio10}
            </p>
            <br>
        </br>
        <img src={Hike} alt="Hike Image" style={{ width: '100%' }} />
        <br></br>
        <br></br>
        <h2>Snowboarding</h2>

            <p><span style={{color: info.baseColor}}>$ <span
                className={Style.green}></span> </span>
                {info.bio11}
            </p>
            <br>
        </br>
        <img src={Snow} alt="Snow Image" style={{ width: '100%' }} />

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