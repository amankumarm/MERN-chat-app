import React from 'react'
import GetStarted from '../../components/InfoSection/GetStarted';
import {getStartedObj} from './Data';

const GetStartedPage = () => {
  return (
    <>
      <GetStarted {...getStartedObj}/>
    </>
  )
}

export default GetStartedPage;
