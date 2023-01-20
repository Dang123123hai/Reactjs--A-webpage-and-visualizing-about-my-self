import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

import {Home,About,Contact,ContactReply,CatGarden} from "./Page"
import HeaderPage from "./HeaderPage"

 const MainPage = () =>{
    return(
        <BrowserRouter>
        
        <Switch>
        <div>
       
        <HeaderPage/>
      
                
                <Route path="/home" exact component ={Home}/>

                <Route path="/about" component ={About}/>

                <Route path="/contact" component ={Contact}/>
                <Route path="/contact_reply" component={ContactReply}/>
                <Route path='/catgarden' component={CatGarden}/>
           
        </div>
        </Switch>
        </BrowserRouter>
    )
}

export default MainPage;