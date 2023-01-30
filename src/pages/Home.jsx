import React from 'react';
import App, { arr } from '../App';
import Card from '../components/Card';
import "../index.scss";


function Home ({users}) {
  return (
   <div className='cards'>
    {
      arr.map(obj => <Card users={users}/>)
    }
   </div>
  )
}

export default Home
