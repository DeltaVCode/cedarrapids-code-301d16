import React from "react";
import "./App.css";
//import header component
import Header from './Header.jsx';
import Footer from './Footer'
import Main from './MainBody.jsx';
//import the main(html) component

class App extends React.Component {
  //add functions
  //need a return method so that we can see stuff in the browser

  render() {
    return (
    // this is referred to as a Fragment 
    <>
    {/* new thingy  */}
       <Header />
       {/* //add the Main section of pizzas  */}
       <Main />
       <Footer />

    </>
    )
  }
}

export default App;
