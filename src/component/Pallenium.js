import { click } from '@testing-library/user-event/dist/click';
import React from 'react'
// import { Pannellum } from "pannellum-react";

import ReactPannellum, { getConfig } from "react-pannellum";


export const Pallenium = ({imagepath}) => {
    const { src } = this.props;
    const config = {
        autoRotate: -2,
      };
      function click(){
        console.log(getConfig());
      }
  return (
    <>
    <div>Pallenium</div>
    <ReactPannellum
          id="1"
          sceneId="firstScene"
          imageSource="https://pannellum.org/images/alma.jpg"
          config={config}
        />
         <div onClick={()=>click()}>Click me</div>
    {/* <Pannellum
        width="100%"
        image={src}
        pitch={0}
        yaw={180}
        hfov={100}
        autoLoad
        autoRotate={6}
        
      /> */}
    </>
  )
}
