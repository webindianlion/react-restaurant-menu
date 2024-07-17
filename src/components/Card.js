import React from "react"
// import CardsList from "./CardsList"
const style = {
    imgStyle: {
        
        maxHeight: "200px"
    }
}
const Cards = function(props) {

     return props.data.map((card, i) => {
return<div className="col" key={i}>
    <div className="card shadow-sm">
      <div className="card-img">
        <img src={card.image} alt="" style={style.imgStyle}/>
      </div>
      <div className="card-body">
        <h3 className="card-name">{card.name}</h3>
        <div className="d-flex justify-content-between">
          <h5 className="card-category">{card.category}</h5>
          <p className="card-price">{card.price}</p>
        </div>
        <p className="card-text">{card.description}</p>
      </div>
    </div>
  </div>
    })
}
export default Cards;
