import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "9791bf50a33799fb56cbc32f56afe242";


class App extends Component {

  getWeather = async () => {
    const api_call = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`)

    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return(
        <div>
          <Titles />
          <Form getWeather={this.getWeather} />
          <Weather />
        </div>
    );
  }
}

export default App;