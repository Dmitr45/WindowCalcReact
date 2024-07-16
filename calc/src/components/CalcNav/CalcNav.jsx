import { useState } from 'react';
import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";


export default function Main(){
    let {typeWindow, toggleTypeWindow} = useAppContext();
    let {widthWindow, toggleWidthWindow, 
        heightWindow, toggleHeightWindow} = useAppContext();


return (
    <div className={styles.header}>
                <div class={typeWindow !== 1 ? styles.item : styles.itemSelect} onClick={()=>{toggleTypeWindow(1); toggleWidthWindow(900) }}>
                    <img src="./prime1.png" alt=""/>
                    <p>Одностворчатое</p>
                </div>
                <div class={typeWindow !== 2 ? styles.item : styles.itemSelect} onClick={()=>{toggleTypeWindow(2); toggleWidthWindow(1800)}}>
                    <img src="./prime2.png" alt=""/>
                    <p>Двустворчатое</p>
                </div>
                <div class={typeWindow !== 3 ? styles.item : styles.itemSelect} onClick={()=>{toggleTypeWindow(3); toggleWidthWindow(2700)}}>
                    <img src="./prime3.png" alt=""/>
                    <p>Трехстворчатое</p>
                </div>
                <div class={typeWindow !== 4 ? styles.item : styles.itemSelect} onClick={()=>{toggleTypeWindow(4); toggleWidthWindow(3600)}}>
                    <img src="./prime4.png" alt=""/>
                    <p>Четырехстворчатое</p>
                </div>
    </div>
)};