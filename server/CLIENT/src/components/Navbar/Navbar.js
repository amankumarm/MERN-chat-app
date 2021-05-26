import React,{useState,useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { NavLink } from 'react-router-dom';
import {Button} from '../../globalStyles';
import
{Nav,
 NavbarContainer,
 NavLogo,
 NavIcon,
 MobileIcon,
 NavMenu,
 NavItem,
 NavLinks,
 NavItemBtn,
 NavBtnLink} from './Navbar.elements'



const Navbar = () => {
  const [click,setClick]=useState(false);
  const [button, setButton]=useState(true)

  const handleClick = () =>setClick(!click);
  const showButton=()=>{
    if(window.innerWidth<=960){
      setButton(false)
    }
    else{
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize',showButton);
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
      <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon/>
                HASHTAG.US
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes/>:<FaBars/>}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>

              <NavItem>
                <NavLinks to="/">
                  Home
                </NavLinks>
              </NavItem>
    
              <NavItem>
                <NavLinks to="/features">
                  Features
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/about-us">
                  About Us
                </NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>
                      Get Started
                    </Button>
                  </NavBtnLink>
                ):(
                  <NavBtnLink to="/sign-up">
                    <Button fontBig primary>
                      Get Started
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>

            </NavMenu>
          </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
