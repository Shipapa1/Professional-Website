import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import shoppingCartImage from '../../img/Shop.png'; // Adjust the path as necessary
import Taskimage from '../../img/Task.png';
import Arduinopro from '../../img/Cs120b.png';
export default function Projects({innerRef}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
        <br>
        </br>
        <br></br>
        <h1>Projects</h1>
        <br></br>
        <h2>Shared Shopping Cart</h2>
            <p><span style={{color: info.baseColor}}>$ <span
                className={Style.green}></span> </span>
                {info.bio5}
            </p>
            <br>
        </br>

        
        <img src={shoppingCartImage} alt="Shopping Cart Image" style={{ width: '100%' }} />


        <br></br>
        <h2>Task Scheduler</h2>
            <p><span style={{color: info.baseColor}}>$ <span
                className={Style.green}></span> </span>
                {info.bio6}
            </p>
            <br>
            </br>
            <img src={Taskimage} alt="Task Image" style={{ width: '100%' }} />
            <br></br>
            <h2>Arduino Temperature/Length Reader</h2>
            <p><span style={{color: info.baseColor}}>$ <span
                className={Style.green}></span> </span>
                {info.bio7}
            </p>

            <br>
            </br>

         <img src={Arduinopro} alt="Arduino Image" style={{ width: '100%', height: '400px' }} />

            <br>
            </br>
            <br>
            </br>
            <h1> Work Experience</h1>
            <br></br>
            <h2>Swimming Official</h2>
 
            <p class="right-italic">Kern Swimming Federation | May 2020-Aug 2020 | Bakersfield, CA</p>
            <br></br>
                <p><span style={{color: info.baseColor}}>$ <span
                    className={Style.green}></span> </span>
                    {info.bio8}
                </p>
                <br></br>
            <h2>Mcdonalds Worker</h2>

            <p class="right-italic">Mcdonalds | Sep 2020-March 2021 | Bakersfield, CA</p>
            <br></br>
                <p><span style={{color: info.baseColor}}>$ <span
                    className={Style.green}></span> </span>
                    {info.bio9}
                </p>
                <br></br>
                <p>                                                                                      
                </p>
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