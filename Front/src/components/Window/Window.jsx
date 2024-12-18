import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";







export default function Window(){


let {typeWindow} = useAppContext();
let {widthWindow, toggleWidthWindow, 
     heightWindow, toggleHeightWindow} = useAppContext();





return (
<div className={styles.calcImgWrap}>
                    <div className={styles.calcRangeLeft}>
                        <input key={1} type="range" className={styles.Height} value={heightWindow}  min="400" max="2200" onChange={(e)=>{toggleHeightWindow(e.target.value)}} />
                                <p className={styles.touchText}> {heightWindow} мм</p>
                    </div>


                    <div className={styles.calcImg}>
                        <img src={"/CalculatorJs/img/window"+typeWindow+".png"} alt="window" className={styles.calcImgItem}/>
                        <input key={2} type="range" className={styles.Width} value={widthWindow}   min="400" max="3200" onChange={(e)=>{toggleWidthWindow(e.target.value)}} />
                            <p className={styles.touchText}> {widthWindow} мм</p>
                    </div>
                </div>
)};