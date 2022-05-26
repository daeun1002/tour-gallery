import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import data from './data/tourphoto.json';
import TopNav from './component/TopNav';
import MainGallery from './component/MainGallery';

const App = () => {
  return (
    <div className="containerbox">
      <TopNav />
      <MainGallery />
      {/* {
        data.map((tg, index) => 
        <MainGallery tg={tg} key={index} />
        )
      } */}
    </div>
  )
}

export default App