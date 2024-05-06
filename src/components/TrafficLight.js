import {useState, useEffect} from 'react';
import '../App.css';

const LIGHTS = {
    red: 'red',
    yellow: 'yellow',
    green: 'green',
}

const TrafficLight = () => {
    const [active, setActive] = useState(LIGHTS.red);

    useEffect(() => {
        switch(active){
            case LIGHTS.red:
                setTimeout(() => {setActive(LIGHTS.yellow)}, 4000)
                break;
            case LIGHTS.yellow:
                setTimeout(() => {setActive(LIGHTS.green)}, 2000)
                break;
            case LIGHTS.green:
                setTimeout(() => {setActive(LIGHTS.red)}, 5000)
                break;
        }
    }, [active])

        return (
            <div className='wrapper'>
                <div className='red circle' style={active !== 'red' ? {opacity: 0.2} : null}/>
                <div className='yellow circle' style={active !== 'yellow' ? {opacity: 0.2} : null}/>
                <div className='green circle' style={active !== 'green' ? {opacity: 0.2} : null}/>
            </div>
            
        )
}
export default TrafficLight;