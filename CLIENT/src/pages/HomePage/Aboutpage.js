import React from 'react'
import About from '../../components/InfoSection/About';
import {aboutObj} from './Data';

const Aboutpage = () => {
  return (
    <>
      <About {...aboutObj}/>
    </>
  )
}

export default Aboutpage;
