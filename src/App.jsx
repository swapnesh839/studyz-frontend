import React from 'react'
import { Provider } from 'react-redux'
import store from './assets/Componets/Context/Store'
import Routersfile from "./Routesfile"
import { BrowserRouter } from 'react-router-dom'
import Header from './assets/Componets/Header/Header'
import { Container } from 'react-bootstrap'
import Sidebar from './assets/Componets/Sidebar/Sidebar'
import "./App.css"
import Alert from './assets/Componets/utiles/Alert'
import { useSelector } from 'react-redux'

const App = () => {
  // const isAuthenticated = useSelector((state) => state.Authentication.isAuthenticated);
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Alert/>
        {/* <Header />
        <Sidebar /> */}
        <Routersfile />
      </BrowserRouter>
    </Provider>
  )
}

export default App