import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'
import {
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward,
    ArrowRight
    } from './HeroElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="Hero"> 
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>OutSiderLab</HeroH1>
                <HeroP>Expertos en desarrollar tus ideas y que seas el mas bkn</HeroP>
                <HeroBtnWrapper>
                    <Button to= 'signup' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    primary='true' 
                    dark='true'
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >
                        Comienza ahora {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
