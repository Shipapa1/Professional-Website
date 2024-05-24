import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { HashLink as Link } from 'react-router-hash-link';
import { Box } from "@mui/material";
import { info } from "../info/Info";
import { singlePage } from '../info/Info';
import Confetti from 'react-dom-confetti';
import { fireworks } from '@tsparticles/fireworks'; // Importing the fireworks function

const links = [
    {
        name: 'Home',
        to: '',
        active: 'home'
    },
    {
        name: 'About Me',
        to: 'about',
        active: 'about'
    },
    {
        name: 'Projects/Experience',
        to: 'Projects',
        active: 'Projects'
    },
    {
        name: 'Extracurricular',
        to: 'Extracurricular',
        active: 'Extracurricular'
    }
];

const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 60,
    elementCount: 150,
    dragFriction: 0.1,
    duration: 6000,
    stagger: 0,
    width: "8px",
    height: "8px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
};

export default function Navbar({ darkMode, handleClick, active, setActive }) {
    const [confettiActive, setConfettiActive] = useState(false);
    const triggerConfetti = () => {
        setConfettiActive(true);
        setTimeout(() => setConfettiActive(false), 3000);
    };

    const triggerFireworks = () => {
        // Initialize the fireworks and store the instance in a local variable
        const fireworksInstance = fireworks({
            zIndex: 20,
            colors: ["#ffffff", "#ff0000", "#00ff00", "#0000ff"], // Customize colors here
            options: {
                speed: 3
            }
        });
    
        // Set a timeout to stop the fireworks after a specified time (e.g., 3000 milliseconds)
        setTimeout(() => {
            // Ensure fireworksInstance is accessible here and call the destroy method to stop the fireworks
            if (fireworksInstance) {
                fireworksInstance.destroy();
            }
        }, 3000);
    };
    

    return (
        <Box component={'nav'} width={'100%'} position={singlePage ? 'fixed' : 'relative'} className={darkMode ? Style.dark : Style.light}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                gap={{ xs: '2rem', md: '8rem' }}
                textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) ? Style.active : ''}
                        sx={{ borderImageSource: info.gradient }}>
                        <Link to={singlePage ? `#${link.to}` : `/${link.to}`}
                            scroll={el => scrollWidthOffset(el)}
                            smooth
                            onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </li>
                <li>
                    <button onClick={triggerConfetti} style={{ fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                        🎉
                    </button>
                    <Confetti active={confettiActive} config={confettiConfig} />
                </li>
                <li>
                    <button onClick={triggerFireworks} style={{ fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                    🎇
                    </button>
                </li>
            </Box>
        </Box>
    );
}
