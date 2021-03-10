import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {
    FooterContainer, 
    FooterWrap, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialMediaLogo, 
    WebsiteRights 
} from './FooterElements' 

const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonals</FooterLink>
                                <FooterLink to="/signin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonals</FooterLink>
                                <FooterLink to="/signin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialMediaLogo to="/" onClick={toggleHome}>
                            OUTSIDERLAB
                        </SocialMediaLogo>
                        <WebsiteRights>OutSidersLab {new Date().getFullYear()} All right reserverd.</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
