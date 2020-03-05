import React from 'react';
import './App.css';
import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Route, Switch} from 'react-router-dom';
import About from "./About/About";
import OurProcess from "./OurProcess/OurProcess";
import OurServices from "./OurServices/OurServices";
import Resources from "./Resources/Resources";
import Contact from "./Contact/Contact";
import Articles from "./Articles/Articles";
import NewPost from "./Articles/NewPost";
import SingleArticle from "./Articles/SingleArticle";


function App() {

  return (
    <div>
        <Header/>
      <nav>
        <Navigation />
      </nav>
        <Switch>
        <Route path="/about" component={About}/>
        <Route path="/our-process" component={OurProcess}/>
        <Route path="/our-services" component={OurServices}/>
        <Route path="/resources" component={Resources}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/articles" exact component={Articles}/>
        <Route path="/create" component={NewPost}/>
        <Route path="/articles/:topic" component={SingleArticle}/>
        <Route path="/" exact component={Home}/>
        <Route component={Home}/>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
