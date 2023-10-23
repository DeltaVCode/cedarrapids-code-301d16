import React from "react";
import "./App.css";
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY_LOCATION;

console.log('key',API_KEY);
class App extends React.Component {

constructor(props){
  super(props);
  this.state = {
    starWarsInformation: [],
    error: false,
    cityName: ''
  }
}

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log("life in handle submit!");

    try {
      // 1.build a URL https://swapi.dev/api/people/62/
      let starWarsURL = "https://swapi.dev/api/people/?pag=1";
      console.log(starWarsURL);
      // 2. use axios to call the star wars api online
      let starWarsData = await axios.get(starWarsURL);
      console.log('DATA?',starWarsData.data);

      this.setState({
        starWarsInformation: starWarsData.data.results
      });

    } catch (error) {
      //add a try catch with error handling.
      console.log(error);
      console.log(error.message);
      this.setState({
        error: true,
        errorMessage: `An error occurred: ${error.response.status}`,
      })
    }
  };


// handle the input for the city to update state before we Submit 

handleCityInput = (event) => {
  // console.log(event.target. value);
  //update state
  this.setState({
    cityName: event.target.value
  })
};


//handle the city search to out api using the data from state collected from the form. 

handleCityFormSubmit = async (event) => {
event.preventDefault();
console.log('state name?',this.state.cityName);
//we are going to call the api with the data from state. 
//base url    "?"  and we need the key and we need the city to search. specify the type data json.
let URL = `http://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.cityName}&format=json`;
// console.log(URL);
let cityInfo = await axios.get(URL);
  console.log(cityInfo);
  console.log("city info: ", cityInfo.data[0]);

  // you will update this.state.cityName 
  // this.setState({})

};
















  render() {
    // console.log('RESULTS',this.state.starWarsInformation);
    //state is full loop over to render
    // console.log('from state',this.state.cityName);

    let starWarsList = this.state.starWarsInformation.map((data, index) => {
      return <li key={index}>{data.name}{data.height}</li>
    });
    return (
      <>
        <h1>Data from a Star Wars API</h1>
        <form onSubmit={this.handleSubmit}>
          <button type="sumbit">Display Star Wars Data</button>
        </form>
        {
          this.state.error ? (<p>this.state.errorMessage</p>) : (<ul>{starWarsList}</ul>)
        }
        

       {/* 1.  Add a form to take in a city  */}
        <form onSubmit={this.handleCityFormSubmit}>
          <label>
            Pick a City:
            <input type="text" onChange={this.handleCityInput}/>
          </label>
          <button type="submit"> Get City Data</button>
        </form>



      </>
    );
  }
}

export default App;
