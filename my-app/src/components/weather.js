import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.city &&
                    <div>
                <p>Місцевість :  {this.props.city}, {this.props.country}</p>
                <p>Температура :  {this.props.temp}</p>
                <p>Схід сонця :  {this.props.sunrise}</p>
                <p>Захід сонця:  {this.props.sunset}</p>
                    </div>
                }
                <p>{this.props.error}</p>
            </div>
        );
    }
}

export default Weather;
