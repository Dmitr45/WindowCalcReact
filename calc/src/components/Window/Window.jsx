import { useState } from 'react';
import styles from "./styles.module.css";



export default function Window(){

return (
<div className={styles.calcImgWrap}>
                    <div className={styles.calcRangeLeft}>
                        <div className={styles.calcRangeBottomTouch}>
                            <div className={styles.touchBtn}>
                                <img src="./arrows-vertical.png"/>
                            </div>
                            <p className={styles.touchText}> 1290 мм</p>
                        </div>
                    </div>

                    <div className={styles.calcImg}>
                        <img src="./window.png" alt="window" className={styles.calcImgItem}/>
                        <div className={styles.calcRangeBottom}>
                            <div className={styles.calcRangeBottomTouch}>
                                <div className={styles.touchBtn}>
                                    <img src="./arrows-horizontal.png"/>
                                </div>
                                <p className={styles.touchText}> 1290 мм</p>
                            </div>
                        </div>
                    </div>
                </div>
)};