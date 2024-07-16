import { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";



export default function Payment(){

let [BaseCost, setBaseCost] = useState(0);


let {typeWindow, toggleTypeWindow} = useAppContext(); // Сколько секций у окна
let {widthWindow, toggleWidthWindow, 
    heightWindow, toggleHeightWindow} = useAppContext(); // Размер окна
let {profile, toggleProfile} = useAppContext(); // Профиль окна
let {subReynaers, toggleSubReynaers, // Субпрофили "Reynaers"
     subAlutech, toggleSubAlutech, }  = useAppContext(); // Субпрофили "Alutech"



useEffect(()=>{
let S = (widthWindow/1000)*(heightWindow/1000); // Площадь в метрах 
if ((profile === "Reynaers") & (subReynaers == "Masterline 8")) { setBaseCost(Math.round(30000*S))};
if ((profile === "Reynaers") & (subReynaers == "Slim Line 38")) { setBaseCost(Math.round(32000*S))};
if ((profile === "Alutech") & (subAlutech == "W62")) { setBaseCost(Math.round(22000*S))};
if ((profile === "Alutech") & (subAlutech == "W72")) { setBaseCost(Math.round(26000*S))};
}, [widthWindow, heightWindow, subReynaers,  subAlutech, profile]);





return (
<div className={styles.calcPayment}>
            <div className={styles.calcPaymentContent}>
                <div>
                    <p>Изделие:</p>
                    <span className={styles.paymentAll}>{BaseCost}</span>
                </div>
                <div>
                    <p>Опции:</p>
                    <span>0</span>
                </div>
                <div>
                    <p>Монтаж:</p>
                    <span> 0 ₽</span>
                </div>
                <div>
                    <p>Доставка:</p>
                    <span>0</span>
                </div>
            </div>

            <div className={styles.calcPaymentBtn}>
                <div> <span> <img src="./img/cart.png" alt="" /> Добавить в корзину</span></div>
                <div><span>Получить расчет</span></div>
            </div>
</div>
)};