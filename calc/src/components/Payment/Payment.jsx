import { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";



export default function Payment(){


const  profilesArr =  useAppContext(); // Массив профилей


let {typeWindow, toggleTypeWindow} = useAppContext(); // Сколько секций у окна
let {widthWindow, toggleWidthWindow, 
    heightWindow, toggleHeightWindow} = useAppContext(); // Размер окна
let {profile, toggleProfile} = useAppContext(); // Профиль окна
let {subProfile, toggleSubProfile}  = useAppContext(); // Субпрофиль текущий
let {glass, toggleGlass, hardening, toggleHardening,
    costGlass, costHardenin, } = useAppContext(); // Остекление
let {hiddHardware, toggleHiddHardware,
    costhiddHardware} = useAppContext(); // Скрытая фурнитура
let {montage, toggleMontage,
    costMontage} = useAppContext(); // Монтаж

let {delivery, toggleDelivery,
    costDelivery} = useAppContext(); // Доставка

let {optionsArr, option0, toggleOption0, // Опции Отлив
    option1, toggleOption1, // Опции Подоконник
    option2, toggleOption2 // Опции Антимоскитная сетка}  
    }= useAppContext();// Опции включенные

let {paint, togglePaint, multicolor, toggleMulticolor, 
    colorArr}= useAppContext();// Выбранная краска}






let [BaseCost, setBaseCost] = useState(0);
useEffect(()=>{
let S = (widthWindow/1000)*(heightWindow/1000); // Площадь в метрах 

setBaseCost( 
    Math.round(S* ( profilesArr.profilesArr[profile.id].subProf[subProfile.id].cost + colorArr[multicolor.id].col[paint.id].cost + costGlass[glass.id] + (hardening ? costHardenin: 0) + (hiddHardware ? costhiddHardware: 0) + (montage ? costMontage: 0) + (delivery*costDelivery)))
    + Math.round((option0 ? Math.round(optionsArr[0].cost*widthWindow/1000):0) + (option1 ? Math.round(optionsArr[1].cost*widthWindow/1000):0) + (option2 ? Math.round(optionsArr[2].cost):0))
)}, [widthWindow, heightWindow, profile, subProfile, glass, hardening, hiddHardware, montage, delivery, option0, option1, option2, paint, multicolor]);





return (
<div className={styles.calcPayment}>
            <div className={styles.calcPaymentContent}>
                <div>
                    <p>Общая стоимость:</p>
                    <span className={styles.paymentAll}>{BaseCost} ₽</span>
                </div>
                <div>
                    <p>Опции:</p>
                    <span>{    (option0 ? Math.round(optionsArr[0].cost*widthWindow/1000):0) // Отлив
                                +
                                (option1 ? Math.round(optionsArr[1].cost*widthWindow/1000):0) // Подоконник
                                +
                                (option2 ? Math.round(optionsArr[2].cost):0) // Подоконник
                            }
                    </span>
                </div>
                <div>
                    <p>Монтаж:</p>
                    <span> {montage ? Math.round(costMontage*(widthWindow/1000)*(heightWindow/1000)): 0} ₽</span>
                </div>
                <div>
                    <p>Доставка:</p>
                    <span>{Math.round(delivery*costDelivery)} ₽</span>
                </div>
            </div>

            <div className={styles.calcPaymentBtn}>
                <div> <span> Добавить в корзину</span></div>
                <div><span>Получить расчет</span></div>
            </div>




</div>
)};