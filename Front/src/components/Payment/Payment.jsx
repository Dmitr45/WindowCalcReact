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


let [PaymentHide, setPaymentHide] = useState(true);
let PaymentOffer =  <div className={styles.PaymentBtn}>
                        <div onClick={()=>setPaymentHide(false)}><span >Получить смету</span></div>
                        <div onClick={()=>setPaymentHide(false)}><span >Консультация</span></div>
                    </div>;
let PaymentSend =   <div className={styles.userForm}>
                        <form action="" method="post">
                                <input type="text" id="name" name="name" placeholder="Your name.." required/><p/>
                                <input type="email" id="email" name="email" placeholder="Your email.." required/><p/>
                                <div className={styles.PaymentBtn}>
                                    <div type="submit" value="Register">Отправить заявку</div>
                                </div>
                        </form>
                                        <ul>
                                            Секций: {typeWindow} <p/>
                                            Ширина: {widthWindow} мм<p/>
                                            Высота: {heightWindow} мм<p/>
                                            Профиль: {profile.name}<p/>
                                            Стекло: {glass.name} <p/>
                                            Монтаж: {montage? "Да": "Нет"} <p/>
                                            Доставка: {delivery? "Да": "Нет"} <p/>
                                            Отлив: {option0? "Да": "Нет"} <p/>
                                            Подоконник: {option1? "Да": "Нет"} <p/>
                                            Маскитная сетка: {option2? "Да": "Нет"} <p/>
                                        </ul>
                    </div>;

let [PaymentBtn, setPaymentBtn] = useState("");
useEffect(()=>{
    PaymentHide ? setPaymentBtn(PaymentOffer) : setPaymentBtn(PaymentSend);

},[PaymentHide])


let [BaseCost, setBaseCost] = useState(0);
useEffect(()=>{
let S = (widthWindow/1000)*(heightWindow/1000); // Площадь в метрах 

setBaseCost( 
    Math.round(S* ( profilesArr.profilesArr[profile.id].subProf[subProfile.id].cost + colorArr[multicolor.id].col[paint.id].cost + costGlass[glass.id] + (hardening ? costHardenin: 0) + (hiddHardware ? costhiddHardware: 0) + (montage ? costMontage: 0) + (delivery*costDelivery)))
    + Math.round((option0 ? Math.round(optionsArr[0].cost*widthWindow/1000):0) + (option1 ? Math.round(optionsArr[1].cost*widthWindow/1000):0) + (option2 ? Math.round(optionsArr[2].cost):0))
)}, [widthWindow, heightWindow, profile, subProfile, glass, hardening, hiddHardware, montage, delivery, option0, option1, option2, paint, multicolor]);





return (
<div className={styles.calcPayment}>
                <div>
                    <p>Общая стоимость:</p>
                    <span className={styles.paymentAll}>{BaseCost} ₽</span>
                </div>
            <div className={styles.calcPaymentContent}>
                <div>
                    <p>Изделие:</p>
                    <span >{Math.round((widthWindow/1000)*(heightWindow/1000)* ( profilesArr.profilesArr[profile.id].subProf[subProfile.id].cost + colorArr[multicolor.id].col[paint.id].cost + costGlass[glass.id] + (hardening ? costHardenin: 0) + (hiddHardware ? costhiddHardware: 0)))} ₽</span>
                </div>
                <div>
                    <p>Опции:</p>
                    <span>{    (option0 ? Math.round(optionsArr[0].cost*widthWindow/1000):0) // Отлив
                                +
                                (option1 ? Math.round(optionsArr[1].cost*widthWindow/1000):0) // Подоконник
                                +
                                (option2 ? Math.round(optionsArr[2].cost):0) // Подоконник
                            } ₽
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
            {PaymentBtn}
</div>
)};