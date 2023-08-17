import "./current_weather.css"


const Current=()=> {
  return (
    <div className="weather-one">
      <div className="upper">
       <div>

        <p className="city">delhi</p>
        <p className="weather-description">sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png"/>

      </div>
    </div>
  )
}

export default Current
