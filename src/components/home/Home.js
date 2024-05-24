import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Home({innerRef}) {
   return (
      <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'flex-start'} minHeight={'calc(100vh - 175px)'} id={'home'}
           className={classNames(Style.lightBlueBackground)}>
         <Box style={{ maxWidth: '35%', textAlign: 'justify', margin: '0 auto' }}>
            <h1>I'm <span style={{background: 'linear-gradient(to right, orange, white)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.laptop}>💻</span></h1>
            <h2>{info.position}</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'flex-start'} fontSize={{xs: '2rem', md: '2.5rem'}} style={{ marginTop: '2rem' }}> {/* Adjusted marginTop here */}
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient, marginLeft: '0', padding: '0', position: 'relative', left: '-20%', transition: 'left 0.3s ease'}}
              component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '1rem'}}/>
      </Box>
      
   )
}
