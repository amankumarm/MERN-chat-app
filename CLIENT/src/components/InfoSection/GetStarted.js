import React from 'react'
import { Container } from '../../globalStyles'
import 
{ InfoColumn, 
  InfoRow, 
  InfoSec, 
  TextWrapper,
  Heading,
  ImgWrapper,
  Img,
  Li
 } from './InfoSection.elements'

const GetStarted = ({lightBg,img1,img2,alt,lightText,headLine1,headLine2,imgStart,start}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <InfoRow>
              <ImgWrapper start={start}>
                <Li href="http://localhost:5000/#/chat"><Img src={img1} alt={alt}/></Li>
              </ImgWrapper>
              </InfoRow>
              <InfoRow>
              <TextWrapper>
                  <Heading lightText={lightText}>{headLine1}</Heading>
              </TextWrapper>
              </InfoRow>
            </InfoColumn>

            <InfoColumn>
              <InfoRow>
              <ImgWrapper start={start}>
                <Li href="http://localhost:5000/video"><Img src={img2} alt={alt}/></Li>
              </ImgWrapper>
              </InfoRow>
              <InfoRow>
              <TextWrapper>
                  <Heading lightText={lightText}>{headLine2}</Heading>
              </TextWrapper>
              </InfoRow>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default GetStarted

