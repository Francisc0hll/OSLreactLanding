import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg_mobile.svg'
import Icon3 from '../../images/svg-3.svg'
import {
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP 
} from './ServicesElements'


const Services = () => {
    return (
        
        <ServicesContainer id="services">
            <ServicesH1>Nuestros Servicios</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Web Developer</ServicesH2>
                    <ServicesP>lo que sea que debamos decir en esta parte de la pagina</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>E-commerce</ServicesH2>
                    <ServicesP>lo que sea que debamos decir en esta parte de la pagina</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Mobile App</ServicesH2>
                    <ServicesP>lo que sea que debamos decir en esta parte de la pagina</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>  
        
    )
}

export default Services
