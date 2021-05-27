import React from 'react';

import { Container } from '../../globalStyles';
import 
{InfoSec,
 Compartment,
 Element,
 Pic,
 Name,
 Desc,
 Links,
 Instagram,
 Github,
 Linkedin,
 Facebook,
 Li
 
}from './InfoSection.elements';

const About = ({lightBg,img1,img2,alt1,alt2,name1,name2,desc1,desc2}) => {
  return (
    <>
    <InfoSec lightBg={lightBg}>
      <Container>
      <Compartment>
        <Element>
          <Pic src={img1} alt={alt1}/>
          <Name>{name1}</Name>
          <Desc>{desc1}</Desc>
          <Links>
          
            <Li href={"https://github.com/akanksha-akkihal"} ><Github/></Li>
            <Li href={"https://www.instagram.com/akanksha_akkihal/"}><Instagram/></Li>
            <Li href={"https://www.linkedin.com/in/akanksha-akkihal-ba923719b/"}><Linkedin/></Li>
            <Li href={"https://www.facebook.com/akanksha.akkihal"}><Facebook/></Li>
            
          </Links>
          
        </Element>
        <Element>
          <Pic src={img2} alt={alt2}/>
          <Name>{name2}</Name>
          <Desc>{desc2}</Desc>
          <Links>
            <Li href={"https://github.com/amankumarm"}><Github/></Li>
            <Li href={"https://www.instagram.com/aman.kumar.m/"}><Instagram/></Li>
            <Li href={"https://www.linkedin.com/in/aman-kumar-m-889b021a1/"}><Linkedin/></Li>
            <Li href={"https://www.facebook.com/people/Aman-Kumar/100004851093354"}><Facebook/></Li>
            
          </Links>
        </Element>
      </Compartment>
      </Container>
    </InfoSec> 
    </>
  )
}

export default About
