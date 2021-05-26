import React from 'react'
import InfoSection from '../../components/InfoSection/InfoSection'
import Feature from '../../components/InfoSection/Feature';
import About from '../../components/InfoSection/About';
import {homeObjOne , featureObj,aboutObj} from './Data';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Feature {...featureObj}/>
      <About {...aboutObj}/>
    </>
  )
}

export default Home;
