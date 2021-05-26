import React from 'react'
import Feature from '../../components/InfoSection/Feature';
import About from '../../components/InfoSection/About';
import {featureObj,aboutObj} from './Data';

const Featurepage = () => {
  return (
    <>
      <Feature {...featureObj}/>
      <About {...aboutObj}/>
    </>
  )
}

export default Featurepage;
