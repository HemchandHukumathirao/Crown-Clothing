import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/signin-and-signup-page/signin-and-signup-page";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path='/signIn' component={SignInAndSignUpPage}/>
            </Switch>
        </div>

    );
}

export default App;
