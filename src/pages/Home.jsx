import React from 'react';

import Card from '../components/Card';
import "../index.scss";


function Home () {
  return (
   <div className='cards'>
    <Card name={'Name'} gender={'Gender'} />
    <Card name={'Name'} gender={'Gender'} />
    <Card name={'Name'} gender={'Gender'} />
   </div>
  )
}

export default Home
