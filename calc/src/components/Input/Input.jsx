import { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";


export default function Input(){
    let {typeWindow, toggleTypeWindow} = useAppContext();
    let {widthWindow, toggleWidthWindow, 
        heightWindow, toggleHeightWindow} = useAppContext();
    //let {profile, toggleProfile} = 

useEffect(()=>{
if  (widthWindow <= 900) {toggleTypeWindow(1)}
else if (widthWindow <= 1800) {toggleTypeWindow(2)}
else if (widthWindow <= 2700) {toggleTypeWindow(3)}
else  {toggleTypeWindow(4)}

},[widthWindow]);


return (
    <div className={styles.inputForm}>
            <div className={styles.selectSize}>
                <div className={styles.L}>
                            <p>Высота, мм </p>
                            <div className={styles.selectDiv}>
                                <input type="number" className={styles.selectNum} value={heightWindow} onChange={(e)=>{toggleHeightWindow(e.target.value)}}  />
                                <span>мм</span>
                            </div>
                </div>
                <div className={styles.R}>
                <p>Тип профиля</p>
                            <div className={styles.selectDiv}>
                                <input type="number" className={styles.selectNum}  value={widthWindow} onChange={(e)=>{toggleWidthWindow(e.target.value)}}/>
                                <span>мм</span>
                            </div>
                </div>
            </div>
            {/* <div className={styles.selectSize}>
                <div className={styles.L}>
                            <p>Профиль</p>
                            <div className={styles.selectDiv}>
                                <input type="number" className={styles.selectNum} value={heightWindow} onChange={(e)=>{toggleProfile(e.target.value)}}  />
                                <span>мм</span>
                            </div>
                </div>
                <div className={styles.R}>
                            <p>Тип профиля</p>
                            <div className={styles.selectDiv}>
                                <input type="number" className={styles.selectNum}  value={widthWindow} onChange={(e)=>{toggleWidthWindow(e.target.value)}}/>
                                <span>мм</span>
                            </div>
                </div>
            </div> */}
    </div>
)};