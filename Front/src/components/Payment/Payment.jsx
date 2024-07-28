import { useCallback, useEffect, useState } from 'react';
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

let [PaymentHide, setPaymentHide] = useState(1);

let [BaseCost, setBaseCost] = useState(0);
let [infoBlock, setInfoBlock] = useState();
let [customerName, setCustomerName] = useState();
let [customerMail, setCustomerMail] = useState()
let [targetName, setTargetName] = useState(customerName);
let [targetMail, setTargetMail] = useState(customerMail);

let [PaymentBtn, setPaymentBtn] = useState("");
useEffect(()=>{
    if (PaymentHide === 1)  setPaymentBtn(PaymentOffer);
    if (PaymentHide === 2 && customerMail)   Resend(handleClick);
    if (PaymentHide === 3)  setPaymentBtn(PaymentThanks);
    if (PaymentHide === 4)  setPaymentBtn(PaymentErr);
},[PaymentHide, customerMail])

let Resend = (func) =>{
    setPaymentBtn(PaymentLoader);
    let coin=0;   
    let Dalay = setInterval(()=>{
        coin++; 
        if (coin===2) {func(); clearInterval(Dalay);  }    
    },100) };


useEffect(()=>{
let S = (widthWindow/1000)*(heightWindow/1000); // Площадь в метрах 

setBaseCost( 
    Math.round(S* ( profilesArr.profilesArr[profile.id].subProf[subProfile.id].cost + colorArr[multicolor.id].col[paint.id].cost + costGlass[glass.id] + (hardening ? costHardenin: 0) + (hiddHardware ? costhiddHardware: 0) + (montage ? costMontage: 0) + (delivery*costDelivery)))
    + Math.round((option0 ? Math.round(optionsArr[0].cost*widthWindow/1000):0) + (option1 ? Math.round(optionsArr[1].cost*widthWindow/1000):0) + (option2 ? Math.round(optionsArr[2].cost):0))
        )

    setInfoBlock(JSON.stringify({
        "name": customerName ,
        "email": customerMail ,
        "typeWindow": typeWindow,
        "widthWindow": widthWindow,
        "heightWindow": heightWindow,
        "profileName": profile.name,
        "glassName": glass.name,
        "montage": montage? "Да": "Нет",
        "delivery": delivery? "Да": "Нет",
        "option0": option0? "Да": "Нет",
        "option1": option1? "Да": "Нет",
        "option2": option2? "Да": "Нет",
    }))

}, [widthWindow, heightWindow, profile, subProfile, glass, hardening, hiddHardware, montage, delivery, option0, option1, option2, paint, multicolor, customerName, customerMail, PaymentHide]);



useEffect(()=>{
setCustomerName(targetName);
setCustomerMail(targetMail);
},[targetName,targetMail]);




let PaymentOffer =  useCallback( <div className={styles.userForm}>
                    <input type="text" id="name" name="name" placeholder="Your name.." required value={customerName} onChange={(e)=> setTargetName(e.target.value)}  /><p/>
                    <input type="email" id="email" name="email" placeholder="Your email.." required value={customerMail} onChange={(e)=> setTargetMail(e.target.value)}  /><p/>
                    <div className={styles.PaymentBtn}>
                    <div  type="submit" value="Register" onClick={()=> setPaymentHide(2)  }><span >Получить консультацию</span></div>
                    </div>
                    </div>);

  let  PaymentLoader =   <div className={styles.userForm}>
                            <div style={{"margin": "0 auto", "width": "50px"}}><img src="/CalculatorJs/img/loader.gif" alt="Ждем ответа сервера" style={{"margin": "0 auto", "width": "50px"}}  /></div>
                        </div>;

let PaymentThanks = <div className={styles.userForm}>
<form action="" method="post">
    <p>
       <div> Спасибо! Ваша заявка отправлена! Вам на почту придет сообщение.  </div>
       <div> Не забудьте проверить папку "Спам"   </div>
    </p>
</form>
</div>;

let PaymentErr = <div className={styles.userForm}>
<form action="" method="post">
    <p>
       <div> Внимание! Ваша заявка НЕ отправлена! Возникла ошибка!  </div>
       <div> Пожалуйста, попробуйте позже или напишите на pletnevdn@gmail.com!   </div>
    </p>
</form>
</div>;

async function handleClick (e) {

    console.log(infoBlock);
    const response = await fetch('/CalculatorJs/ServerPHP/send_mail.php', {
        method: 'POST',
        body:infoBlock
    });
    if(response.ok){
        // const json = await response.json();
        console.log("Письмо ушло");
        setPaymentHide(3);

    }
    else{
        console.log('Ошибка отправки');
        setPaymentHide(4);
    }
};





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