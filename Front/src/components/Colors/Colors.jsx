import { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";



export default function Colors(){
const  {profilesArr} =  useAppContext(); // Массив профилей
const {glass} = useAppContext(); // Одно, двухкамерная
let {profile, toggleProfile} = useAppContext(); // Профиль окна текущий
let {subProfile, toggleSubProfile}  = useAppContext(); // Субпрофиль текущий
let [percent, setPercent] = useState([0, 0, 0]); // [Red Yellow Green]

useEffect(()=>{
    setPercent([
        glass.id === 2 ? (profilesArr[profile.id].subProf[subProfile.id].thermalProtection + 20) : profilesArr[profile.id].subProf[subProfile.id].thermalProtection,
        glass.id === 2 ? (profilesArr[profile.id].subProf[subProfile.id].lightProtection + 20) : profilesArr[profile.id].subProf[subProfile.id].lightProtection,
        glass.id === 2 ? (profilesArr[profile.id].subProf[subProfile.id].soundProtection + 20) : profilesArr[profile.id].subProf[subProfile.id].soundProtection
    ])
} ,[profile,subProfile, glass]);

return (
    <div className={styles.temp}>
                        <div className={styles.item}>
                            <img src="/CalculatorJs/img/hot.png" alt=""/>
                            <div className={styles.red}>
                                <div className={styles.redBold} style={{"width": percent[0] + "%"}}></div>
                            </div>
                        </div>
                        <div class={styles.item}>
                            <img src="/CalculatorJs/img/san.png" alt=""/>
                            <div className={styles.yellow}>
                                <div className={styles.yellowBold} style={{"width": percent[1] + "%"}}></div>
                            </div>
                        </div>
                        <div class={styles.item}>
                            <img src="/CalculatorJs/img/volume.png" alt=""/>
                            <div className={styles.green} >
                                <div className={styles.greenBold} style={{"width": percent[2] + "%"}}></div>
                            </div>
                        </div>
    </div>
)};