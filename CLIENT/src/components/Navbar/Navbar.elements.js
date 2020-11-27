import styled from 'styled-components';
import {HiHashtag} from 'react-icons/hi';
import {Link} from 'react-router-dom';
import {Container} from '../../globalStyles';

export const Nav = styled.nav`
background: #101522;
height: 80px;
display: flex;
justify-content: center;
align-items:center;
font-size:1.7rem;
position: sticky;
top:0;
z-index:999;
font-family: cursive;

&:hover{
  color:red;
}
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height:80px;
${Container}
`;

export const NavLogo =styled(Link)`
color:#fff;
justify-self:flex-start;
cursor:pointer;
text-decoration:none;
font-size:2.5rem;
display:flex;
align-items:center;
font-family: 'Goldman', cursive;

`;

export const NavIcon= styled(HiHashtag)`
margin-right:0.5rem;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width:960px){
  display: block;
  position:absolute;
  top: 15px;
  right:15px;
  transform: translate()(-100%,60%);
  font-size:1.8rem;
  cursor: pointer;
}`;

export const NavMenu =styled.ul`
display:flex;
align-items:center;
list-style: none;
text-align:center;

@media screen and (max-width:960px){
  display:flex;
  flex-direction : column;
  width:100%;
  height : 90vh;
  position :absolute;
  top: 80px;
  left: ${({click}) => (click ? 0: '100%')};
  opacity: 1 ;
  transition: all 0.5s ease;
  background-color: #141440;
}
`;

export const NavItem = styled.li`
height: 80px;
border-bottom: 3px solid transparent;

&:hover{
  border-bottom:5px solid #4be6f7;
}

@media screen and (max-width:960px){
  width: 100%;

  &:hover{
    border: none;
  }
}
`;

export const NavLinks = styled(Link)`
color: #fff;
display:flex;
align-items:center;
text-decoration:none;
padding: 0.5rem 1rem;
height: 100%;
font-family: 'Poppins', sans-serif;
font-size:22px;

@media screen and (max-width:960px){
  text-align:center;
  padding: 2rem;
  width: 100%;
  display:table;

  &:hover{
    color:#4be6f7;
    transition: all 0.3s ease;
  }
}
`;

export const NavItemBtn = styled.li`
@media screen and (max-width:960px){
  display: flex;
  justify-content: center;
  align-items:center;
  width:100%;
  height:120px;
}
`;

export const NavBtnLink= styled(Link)`
display:flex;
justify-content:center;
align-items:center;
text-decoration:none;
padding:8px 16px;
height:100%;
width:100%;
border:none;
outline:none;
`;