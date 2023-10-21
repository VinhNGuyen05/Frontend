import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from "./Item"
import slider from "../Carousel/helper/slider.json"
function Carousels() {
  return (
    <>
    <Carousel sx={{width: "90%", margin: "auto", border: "none", marginTop: "20px"}}>
       {
        slider.map( item => <Item key={item.id} item={item}/>)
       }
    </Carousel>
    </>
  )
}

export default Carousels;

