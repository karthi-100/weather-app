import Rain from '../../../../Asset/rain.png'
import Sunny from '../../../../Asset/sunny.png'
import Cloud from '../../../../Asset/cloud.png'
import Humidity from '../../../../Asset/humidity.png'
import Wind from '../../../../Asset/wind.png'
import './WeatherContent.css'
function WeatherContent(prop){
const cname=prop.weather.name
const condition=prop.weather.weather[0].main
const humidity=prop.weather.main.humidity
const wind=prop.weather.wind.speed
const temp=prop.weather.main.temp
    return (<div className='content'>
        <div className="s-name">{cname}</div>
        <div className="image">
            {condition=='Clouds'?<img src={Cloud} alt=""></img>:condition=='Sunny'?<img src={Sunny}></img>:<img src={Rain}></img>}
            
        </div>
        <div className="temprature">
            {Math.round(temp-273)}&deg;C </div>
        <div className="c-name">{condition}</div>
        <div className="c-footer">
            <div className="small">
                <img src={Humidity} alt=""/>
                <div className="c-humidity">{humidity} %</div>
                <div></div>
            </div>
            <div className="small">
                <img src={Wind} alt=""/>
                <div className="c-wind">{wind} km/h</div>
            </div>
        </div>

    </div>)
}
export default WeatherContent;