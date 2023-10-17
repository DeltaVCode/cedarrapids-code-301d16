import React from "react";
import "./App.css";
import Header from './Header.jsx';
import Footer from './Footer'
import MainBody from './MainBody.jsx';

class App extends React.Component {
 
  render() {
    return (
    <>
       <Header />
       <MainBody />
       <Footer />

    </>
    )
  }
}

export default App;
