import "./current_weather.css"


const Current=()=> {
  return (
    <div className="weather-one">
      <div className="upper">
        <p className="city">delhi</p>
        <p className="weather-description">rain</p>
      </div>
      <img alt="weather" className="weather-icon" src="icons/01d.png"/>
    </div>
  )
}

export default Current
