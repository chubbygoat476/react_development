import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import drinkData from "./assets/item-data.json";
import DrinkItem from "./components/DrinkItem";
import Faves from "./components/Faves";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toolbar from "./components/Toolbar"
import { render } from "react-dom";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
drinkData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  /* add your cart state code here */
  const [faves, setFaves] = useState([]) //list of strings 
  const [aggPrice, setAggPrice] = useState(0)
  const [filters1, setFilters1] = useState(new Array(12).fill(false))
  const [filters2, setFilters2] = useState(new Array(12).fill(false))
  const [orderedItems, setOrdered] = useState(drinkData.slice())

  const addFaveClicked = (name, price) => {
    if (faves.indexOf(name) < 0) {
      setFaves([...faves, name])
      setAggPrice(aggPrice + price)
    }
  }

  const removeItemFromFaves = (name) => {
    const newFaves = faves.filter(item => item !== name);
    const price = drinkData.find(drink => drink.name == name).price
    setAggPrice(aggPrice - price)
    setFaves(newFaves)
  }

  //filter1 clicked
  const filterClicked1 = (tag) => {
    if (tag != "all") {
      const newFilters1 = filters1.map((item, index)=> {
        if ( (drinkData[index].tag1 == tag) || (drinkData[index].tag2 == tag)) {
          return false;
        } else {
          return true;
        }
      });
      setFilters1(newFilters1)
    } else {
      setFilters1(new Array(12).fill(false))
    } 
  } 
  

  //filter2 clicked
  const filterClicked2  = (f) => {
    if (f != "all") {
      if (f == "L2") {
        const newFilters2 = filters2.map((item, index)=> {
          if (drinkData[index].price <= 2)  {
            return false;
          } else {
            return true;
          }
        });
        setFilters2(newFilters2)
      }
      if (f == "G2") {
        const newFilters2 = filters2.map((item, index)=> {
          if (drinkData[index].price > 2)  {
            return false;
          } else {
            return true;
          }
        });
        setFilters2(newFilters2)
      }
    } else {
      setFilters2(new Array(12).fill(false))
    }
  }

  const sort = (option) => {
    if (option == "price") {
      const newOrderedItems = orderedItems.slice().sort((a, b) => a.price - b.price)
      setOrdered(newOrderedItems)
    } else {
      setOrdered(drinkData.slice())
    }
  
  }

  console.log(orderedItems)



  return (
    <div className="App">
      <Container>
      <Row>
      <h1>Ice Cold Drinks</h1> 
      </Row>
      <Row>
        <Toolbar filterClicked1={filterClicked1}  filterClicked2={filterClicked2} sort={sort}/>
      </Row>
      <Row>
      <Faves name='faves' price={aggPrice} items={faves} removeItemFromFaves={removeItemFromFaves}/>
      </Row>
      <Row sm="auto">
      {orderedItems.map((item, index) => ( 
        <DrinkItem name={item.name} price={item.price} t1={item.tag1} t2={item.tag2} filtered1={filters1[item.id]} filtered2={filters2[item.id]}
        img={item.image} addFaveClicked={addFaveClicked}/>
      ))}
      </Row>
      </Container>
    </div>
  );
}

export default App;
