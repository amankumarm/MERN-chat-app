import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import 
{InfoSec,
 InfoRow,
 InfoColumn,
 TextWrapper,
 Heading,
 Subtitle,
 ImgWrapper,
 Img
} from './InfoSection.elements';


const InfoSection = ({lightBg , imgStart , lightText, lightTextDesc , buttonLabel,description, headLine , primary, img, alt, start}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                  <Heading lightText={lightText}>{headLine}</Heading>
                  <Subtitle lightTextDesc={ lightTextDesc}>{description}</Subtitle>
                  <Link to='/sign-up'>
                    <Button big fontBig primary={primary}>
                      {buttonLabel}
                    </Button>
                  </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                  <Img src={img}  alt={alt}/>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}


export default InfoSection

