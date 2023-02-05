import styles from './Drul.module.css'

export default function DrulFloating3D(){
    return(
        <div id='df3d' className={styles.drul_floating_3d}>
            <p className='drul-floating-3d-text'>DRUL</p>
            <p className='drul-floating-3d-text' style={{fontSize:40}}>em breve</p>
        </div>
    )
}