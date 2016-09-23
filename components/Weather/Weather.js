import React, { Component, PropTypes } from 'react'

class Weather extends Component {
  static propTypes = {
    forecast: PropTypes.object.isRequired
  }


  render() {
    const { high, low, text } = this.props.forecast

    return (
      <div>
        <p>Its going to be {text}!</p>
        <p>Highs of {high}</p>
        <p>Lows of {low}</p>
      </div>
    )
  }
}

export default Weather
