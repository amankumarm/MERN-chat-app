import styled from 'styled-components'
import { FaInstagram ,FaGithub,FaLinkedin,FaFacebook} from 'react-icons/fa';

export const InfoSec=styled.div`
color:#fff;
padding: 120px 0;
background-color:${({lightBg})=>(lightBg ? '#fff': '#101522')};
`;

export const InfoRow = styled.div`
display: flex;
margin: 0 -10px -10px -10px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({imgStart})=>(imgStart ? 'row-reverse': 'row')};

@media screen and (max-width: 768px){
  max-width:100%;
  flex-badsis:100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
}
`;

export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width: 50%;
flex-basis: 50%;

@media screen and (max-width: 768px){
  max-width:100%;
  flex-badsis:100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
}
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;

@media screen and (max-width: 768px){
  padding-bottom: 65px;
}
`;

export const Heading =styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
color: ${({lightText})=>(lightText ? '#f7f8fa':'#101522')};
font-family: 'Goldman', cursive;;
`;

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({lightTextDesc})=>(lightTextDesc ? '#a9b3c1':'#2c3242')};
font-family: 'Inter', sans-serif;
`;

export const ImgWrapper = styled.div`
max-width: 550px;
display: flex;
justify-content:${({ start})=>(start ? 'flex-start':'flex-end')};
`;

export const Img= styled.img`
padding-right:0;
padding-bottom:10px;
border:0;
max-width: 100%;
vertical-align:middle;
display: inline-flex;
height: 400px;
`;
export const Compartment=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin-right:150px;
margin-left:150px;

@media screen and (max-width: 768px){
  max-width:100%;
  flex-badsis:100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  margin-left:30px;
  margin-right:30px;
}
`;

export const Element=styled.div`
display:flex;
flex-direction:column;
align-items:center;

@media screen and (max-width: 768px){
  margin-bottom:70px;
}
`;
export const Pic=styled.img`
width:200px ;
height: 200px;
border-radius:50%;
vertical-align:middle;
`;
export const Name=styled.h1`
color:'#f7f8fa';
font-size: 30px;
font-family: 'Goldman', cursive;
`;
export const Desc=styled.p`
color:'#a9b3c1';
font-size: 17px;
font-family: 'Inter', sans-serif;
`;
export const Links=styled.div`
display:flex;
justify-content: center;
margin-top:30px;
`;
export const Instagram=styled(FaInstagram)`
margin-right:1rem;
font-size:30px;
`;
export const Github=styled(FaGithub)`
margin-right:1rem;
font-size:30px;
text-decoration:none;
`;
export const Linkedin=styled(FaLinkedin)`
margin-right:1rem;
font-size:30px;
`;
export const Facebook=styled(FaFacebook)`
margin-right:1rem;
font-size:30px;
`;

export const Li=styled.a`
color:white;
`