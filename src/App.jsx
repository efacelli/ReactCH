import React from 'react'
import TituloPrincipal from './components/TituloPrincipal/TituloPrincipal'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import CartWidget from './components/CartWidget/CartWidget'
import Boton from './components/Boton/Boton'
const App = () => {
  return (
    <>
      <TituloPrincipal/>
      <NavBar/>
      <ItemListContainer/>
      <ItemCount/>
      <CartWidget/>
      <Boton/>
    </>
  )
}

export default App