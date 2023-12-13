import React, {useState} from "react";
import Nav from "../components/Nav";
import Cards from "../components/Card";
import CardsList from "../components/CardsList";
import $ from 'jquery';

const Restaurant = function(){

    const categories = CardsList.map((card) => {return card.category});
    const uniquecatetory = ["All", ...new Set(categories)]
    // console.log(uniquecatetory);

  const [AllCards, setAllCards] = useState(CardsList);

   const navitem = (event) => {
    const navItem =  $(event.target).text(); 
    // console.log(navItem)
    let cardFilter = CardsList.filter((item) => {
        if(navItem === "All"){
          return  item
        }
      return  item.category === navItem;
    });
    setAllCards(cardFilter)
  }

    return <div className="container">
        <div className="App mt-5">
        <h2 className="mt-3">This is Restaurant Menu App</h2>
        
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <Nav uniquecatetory = {uniquecatetory} dataChange={navitem}/>
              </ul>
              
            </div>
          </div>
        </nav>
        
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <Cards data={AllCards} />
        </div>
      </div>
    </div>
}
export default Restaurant;