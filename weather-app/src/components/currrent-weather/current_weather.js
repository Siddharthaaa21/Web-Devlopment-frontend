import "./current_weather.css"


const Current = () => {
  return (
    <div className="weather-one">
      <div className="upper">

        <div>
          <p className="city"> delhi </p>
          <p className="weather-description"> sunny </p>



          {/* <p className="weather-description">sunny</p> */}
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />


      </div>
      <div className="bottom">
        <p className="temp">18° </p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top"> Details </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">feels like </span>
            <span className="parameter-value">  22° </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"> wind</span>
            <span className="parameter-value">  2 m/s </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">humidity </span>
            <span className="parameter-value">  50 percent </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">pressure </span>
            <span className="parameter-value">  15 hPa </span>
          </div>



        </div>
      </div>


    </div >
  )
}

export default Current
