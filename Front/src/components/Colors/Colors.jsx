import { useState } from 'react';
import styles from "./styles.module.css";



export default function Colors(){

return (
    <div className={styles.temp}>
                        <div className={styles.item}>
                            <img src="hot.png" alt=""/>
                            <div className={styles.red}>
                                <div className={styles.redBold}></div>
                            </div>
                        </div>
                        <div class={styles.item}>
                            <img src="san.png" alt=""/>
                            <div className={styles.yellow}>
                                <div className={styles.yellowBold}></div>
                            </div>
                        </div>
                        <div class={styles.item}>
                            <img src="volume.png" alt=""/>
                            <div className={styles.green} >
                                <div className={styles.greenBold}></div>
                            </div>
                        </div>
    </div>
)};