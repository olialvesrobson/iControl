import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

import UserDetail from './components/users/userDetail'

import CreateProduct from './components/products/createProduct'
import ProductList from './components/products/listProducts'
import EditProduct from './components/products/editProduct'

import CreateClient from './components/clients/createClient'
import ClientList from './components/clients/listClients'
import EditClient from './components/clients/editClient'

import CreateGroup from './components/financialGroup/createGroup'
import GroupList from './components/financialGroup/listGroup'
import EditGroup from './components/financialGroup/editGroup'

import CreateOrder from './components/orders/createOrder'
import OrderList from './components/orders/listOrders'
import EditOrder from './components/orders/editOrder'



function App() {
  

  return (
    <BrowserRouter>
      <div className="App w3-card">
        <Navbar/>
        
        <div className="" style={{minHeight: "610px"}}>
          <Switch>
            {/* ROOT BLOCK */}
            <Route exact path='/' component={Dashboard}/>
            
            {/* AUTHENTICATION BLOCK */}
            <Route path='/SignIn' component={SignIn}/>
            <Route path='/SignUp' component={SignUp}/>

            {/* USER BLOCK */}
            <Route path='/profile' component={UserDetail} />


            {/* PRODUCT BLOCK */}
            <Route path='/createProduct' component={CreateProduct} />
            <Route path='/products' component={ProductList} />
            <Route path='/product/:id' component={EditProduct} />

            {/* CLIENT BLOCK */}
            <Route path='/createClient' component={CreateClient} />
            <Route path='/clients' component={ClientList} />
            <Route path='/client/:id' component={EditClient} />


            {/* GROUP BLOCK */}
            <Route path='/createGroup' component={CreateGroup} />
            <Route path='/groups' component={GroupList} />
            <Route path='/group/:id' component={EditGroup} />

            {/* ORDER BLOCK */}
            <Route path='/createOrder' component={CreateOrder} />
            <Route path='/orders' component={OrderList} />
            <Route path='/order/:id' component={EditOrder} />



          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
