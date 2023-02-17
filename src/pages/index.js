import React from 'react';
import styles from './Drul.module.css'

class DrulFloating3D extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var ob = document.querySelector("#df3d");
        var backg = document.querySelector("#backg");
        ob.style.transition = '0.1s';
        backg.style.transition = '0.1s';
        var hsl = 0;
        
        function animTick() {
            hsl+=9;
            if (hsl>360)
                hsl = 0;
            ob.style.color = 'hsl('+(hsl+8)+', 100%, 50%)';
            backg.style.backgroundColor = 'hsl('+hsl+', 100%, 50%)';
        }
        setInterval(animTick, 100);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div id='backg' className={styles.drul_floating_3d}>
                <p id='df3d' className='drul-floating-3d-text'>DRUL</p>
            </div>
        )
    }
}
export default DrulFloating3D