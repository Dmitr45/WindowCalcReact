import { useState } from 'react';
import styles from "./styles.module.css";



export default function Main(){

return (
    <div className={styles.header}>
                <div class={styles.item}>
                    <img src="./prime1.png" alt=""/>
                    <p>Одностворчатое</p>
                </div>
                <div class={styles.item}>
                    <img src="./prime2.png" alt=""/>
                    <p>Двустворчатое</p>
                </div>
                <div class={styles.item}>
                    <img src="./prime3.png" alt=""/>
                    <p>Трехстворчатое</p>
                </div>
    </div>
)};