import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";






export default function Window(){


let {typeWindow, toggleTypeWindow} = useAppContext();
let {widthWindow, toggleWidthWindow, 
     heightWindow, toggleHeightWindow} = useAppContext();


return (
<div className={styles.calcImgWrap}>
                    <div className={styles.calcRangeLeft}>
                        <div className={styles.calcRangeBottomTouch}>
                            <div className={styles.touchBtn}>
                                <img src="./arrows-vertical.png"/>
                            </div>
                            <p className={styles.touchText}> {widthWindow} мм</p>
                        </div>
                    </div>

                    <div className={styles.calcImg}>
                        <img src={"./window"+typeWindow+".png"} alt="window" className={styles.calcImgItem}/>
                        <div className={styles.calcRangeBottom}>
                            <div className={styles.calcRangeBottomTouch}>
                                <div className={styles.touchBtn}>
                                    <img src="./arrows-horizontal.png"/>
                                </div>
                                <p className={styles.touchText}> {heightWindow} мм</p>
                            </div>
                        </div>
                    </div>
                </div>
)};