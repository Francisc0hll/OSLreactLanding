import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SideBtnWrap, 
    SidebarWrapper, 
    SidebarRoute,
    SidebarLink,
    SidebarMenu 
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
              <CloseIcon/>  
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = 'about' onClick={toggle}>Inicio</SidebarLink>
                    <SidebarLink to = 'discover' onClick={toggle} >Nosotros</SidebarLink>
                    <SidebarLink to = 'services' onClick={toggle}>Servicios</SidebarLink>
                    <SidebarLink to = 'signup' onClick={toggle}>Contactanos</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to = '/contactUs'>Contacto</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
