import React from 'react';
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "f850d533bd6afc8cfb22f11b4cb38cb1";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  };
  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      var sunrise = data.sys.sunrise;
      date.setTime(sunrise);
      var sunrise_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: sunrise_date,
        sunset: sunset_date,
        error: undefined
      });
    } else {
      {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "Введіть назву міста",
        });
      }
    }
  };

  render() {
    return (
        <div>
          <Info/>
          <Form weatherMethod={this.gettingWeather}/>
          <Weather
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              error={this.state.error}
          />
        </div>
    )
  }

}
export default App;
