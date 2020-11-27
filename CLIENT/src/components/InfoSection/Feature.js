import React from 'react'
import { Container } from '../../globalStyles'
import 
{ InfoColumn, 
  InfoRow, 
  InfoSec, 
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
 } from './InfoSection.elements'

const Feature = ({lightBg,img1,img2,alt,lightText,lightTextDesc,description1,description2,headLine1,headLine2,imgStart,start}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <InfoRow>
              <ImgWrapper start={start}>
                <Img src={img1} alt={alt}/>
              </ImgWrapper>
              </InfoRow>
              <InfoRow>
              <TextWrapper>
                  <Heading lightText={lightText}>{headLine1}</Heading>
                  <Subtitle lightTextDesc={ lightTextDesc}>{description1}</Subtitle>
              </TextWrapper>
              </InfoRow>
            </InfoColumn>

            <InfoColumn>
              <InfoRow>
              <ImgWrapper start={start}>
                <Img src={img2} alt={alt}/>
              </ImgWrapper>
              </InfoRow>
              <InfoRow>
              <TextWrapper>
                  <Heading lightText={lightText}>{headLine2}</Heading>
                  <Subtitle lightTextDesc={ lightTextDesc}>{description2}</Subtitle>
              </TextWrapper>
              </InfoRow>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default Feature

