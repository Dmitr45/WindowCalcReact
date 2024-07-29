import { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import Colors from "../Colors/Colors"



export default function Input(){
    const  {profilesArr} =  useAppContext(); // Массив профилей


    let {widthWindow, toggleWidthWindow, 
        heightWindow, toggleHeightWindow} = useAppContext(); // Размер окна
    let {profile, toggleProfile} = useAppContext(); // Профиль окна текущий
    let {subProfile, toggleSubProfile}  = useAppContext(); // Субпрофиль текущий
    let {glass, toggleGlass, hardening, toggleHardening} = useAppContext(); // Остекление
    let {hiddHardware, toggleHiddHardware} = useAppContext();  // Скрытая фурнитура
    let {montage, toggleMontage} = useAppContext();  // монтаж
    let {delivery, toggleDelivery} = useAppContext();  // Доставка
    let {optionsArr, option0, toggleOption0, // Опции Отлив
        option1, toggleOption1, // Опции Подоконник
        option2, toggleOption2 // Опции Антимоскитная сетка}  
        }= useAppContext();// Опции включенные
    let {paint, togglePaint, multicolor, toggleMulticolor, 
        colorArr}= useAppContext();// Выбранная краска}



let selectProfile = profilesArr.map((prof, index) =>{ return <option id={index} value={prof.name}>{prof.name}</option> }); // Выбор профиля
let selectSubprof =  profilesArr[profile.id].subProf.map((sub, index) =>{ return <option id={index} value={sub.name}>{sub.name}</option> }); // Выбор субпрофит
let selectGlass =  <><option  value="Однокамерный">Oднокамерное</option> <option  value="Двухкамерный">Двухкамерный</option>;</> // Выбор остекления
let selectHardenin =  <><option  value="Да">Да</option> <option  value="Нет">Нет</option>;</> // Закалки стекла
let selectMulti = colorArr.map((multi, index) =>{ return <option id={index} value={multi.name}>{multi.name}</option> }); // Кратность видов краски
let selectColor =  colorArr[multicolor.id].col.map((color, index) =>{ return <option id={index} value={color.name}>{color.name}</option> }); // Выбор субпрофит






let [profTarget, setProfTarget] = useState(profile.name);
useEffect(()=>{
    toggleProfile({ id:  profilesArr.findIndex( prof => prof.name === profTarget ), name: profTarget });
    toggleSubProfile(  { id: 0, name: profilesArr[profile.id].subProf[0].name } ) ;
    
},[profTarget]);



let [subTarget, setSubTarget] = useState(subProfile.name);
useEffect(()=>{
    if (subTarget)  {toggleSubProfile(  { id:  profilesArr[profile.id].subProf.findIndex( sub => sub.name === subTarget ), name: subTarget } ) };
},[subTarget]);



let [multiTarget, setMultiTarget] = useState(multicolor.name);
useEffect(()=>{
    toggleMulticolor({ id:  colorArr.findIndex( multi => multi.name === multiTarget ), name: multiTarget });
    togglePaint(  { id: 0, name: colorArr[multicolor.id].col[0].name } ) ;    
},[multiTarget]);


let [paintTarget, setTargetPaint] = useState(paint.name);
useEffect(()=>{
    if (paintTarget)  {togglePaint(  { id:  colorArr[multicolor.id].col.findIndex( pai => pai.name === paintTarget ), name: paintTarget } ) };
},[paintTarget]);




let [glassTraget, setGlassTarget] = useState(selectGlass.name);
useEffect(()=>{
    if (glassTraget) {toggleGlass( glassTraget === "Двухкамерный" ? {id: 2, name: "Двухкамерный"} : {id: 1, name: "Однокамерный"} )}; 
},[glassTraget]);

let [hardeningTarget, setHardeningTarget] = useState("Да");
useEffect(()=>{
    if (hardeningTarget) {toggleHardening( hardeningTarget === "Да" ? true : false )}; 
    },[hardeningTarget]);

let [hiddHardwareTarget, setHiddHardwareTarget] = useState("Видимая");
useEffect(()=>{
    if (hiddHardwareTarget) {toggleHiddHardware( hiddHardwareTarget === "Скрытая" ? true : false )}; 
    },[hiddHardwareTarget]);

let [montageTarget, setMontageTarget] = useState("Нет");
useEffect(()=>{
    if (montageTarget) {toggleMontage( montageTarget === "Да" ? true : false )}; 
    },[montageTarget]);


let [numberDeliveDiv, setNumberDeliveDiv] = useState("");
let [tempDelivery, setTempDelivery] = useState(10);
let [hidDiv, setHidDiv] = useState(true);


useEffect(()=>{
if ( !hidDiv) { setNumberDeliveDiv( <div><p>Расстояние доставки, км </p>
                            <div className={styles.selectDiv}>
                                <input min="0" type="number" className={styles.selectNum} value={tempDelivery}  onChange={(e)=>{setTempDelivery(e.target.value)}}  placeholder="Без доставки" />
                                <span>км</span>
                            </div>
                        </div>)
                    toggleDelivery(tempDelivery);
                    } else {setNumberDeliveDiv("");  toggleDelivery(0);}

},[tempDelivery, hidDiv]);



return (
    <div className={styles.inputForm}>

        {/* Размер */}
            <div className={styles.selectSize}>
                <div className={styles.L}>
                            <p>Высота, мм </p>
                            <div className={styles.selectDiv}>
                                <input type="number" className={styles.selectNum} value={heightWindow} onChange={(e)=>{toggleHeightWindow(e.target.value)}}  />
                                <span>мм</span>
                            </div>
                </div>
                <div className={styles.R}>
                <p>Ширина, мм</p>
                            <div className={styles.selectDiv}>
                                <input type="number" className={styles.selectNum}  value={widthWindow} onChange={(e)=>{toggleWidthWindow(e.target.value)}}/>
                                <span>мм</span>
                            </div>
                </div>
            </div>


            {/* Профиль */}
            <div className={styles.selectSize}>
                <div className={styles.L}>
                            <p>Профиль</p>
                            <div className={styles.selectDiv}>
                            <select name='prof'
                            value={profile.name}
                            onChange={(e)=>{setProfTarget(e.target.value)}}
                            >
                                {selectProfile}  
                            </select>

                            </div>
                </div>
                <div className={styles.R}>
                            <p>Тип профиля</p>
                            <div className={styles.selectDiv}>
                                    <select name='sub'
                                            value={subProfile.name}
                                            onChange={(e)=>{setSubTarget(e.target.value)}}
                                    >
                                        {selectSubprof} 
                                    </select>
                            </div>
                </div>
                
            </div>
                    <Colors/>
            {/* Выбор стеклопакета */}
            <div className={styles.selectSize}>
                <div className={styles.L}>
                            <p>Стеклопакет</p>
                            <div className={styles.selectDiv}>
                            <select name='prof'
                            value={glassTraget}
                            onChange={(e)=>{setGlassTarget(e.target.value)}}
                            >
                                {selectGlass}
                            </select>

                            </div>
                </div>
                <div className={styles.R}>
                            <p>Закалка</p>
                            <div className={styles.selectDiv}>
                                    <select name='sub'
                                            value={hardeningTarget}
                                            onChange={(e)=>{setHardeningTarget(e.target.value)}}
                                    >
                                        {selectHardenin} 
                                    </select>
                            </div>
                </div>
            </div>

            {/* Покраска */}
            <div className={styles.selectSize}>
                <div className={styles.L}>
                            <p>Покраска</p>
                            <div className={styles.selectDiv}>
                            <select name='multi'
                            value={multiTarget.name}
                            onChange={(e)=>{setMultiTarget(e.target.value)}}
                            >
                                {selectMulti}  
                            </select>

                            </div>
                </div>
                <div className={styles.R}>
                            <p>Краска</p>
                            <div className={styles.selectDiv}>
                                    <select name='paint'
                                            value={paintTarget.name}
                                            onChange={(e)=>{setTargetPaint(e.target.value)}}
                                    >
                                        {selectColor} 
                                    </select>
                            </div>
                </div>
            </div>

            {/* Выбор скрытой фурнитуры */}
            <div className={styles.selectSize}>
                <div className={styles.L}>
                            <p>Фурнитура</p>
                            <div >
                                <div>
                                    <input type="radio" id="no" name="Hardware" value="Видимая" checked={ hiddHardware === false ? true : false} onChange={(e)=>{setHiddHardwareTarget(e.target.value)}} />
                                    <label for="huey">Видимая</label>
                                </div>
                                <div>
                                    <input type="radio" id="yes" name="Hardware" value="Скрытая" checked={ hiddHardware === true ? true : false} onChange={(e)=>{setHiddHardwareTarget(e.target.value)}} />
                                    <label for="huey">Скрытая</label>
                                </div>

                            </div>
                    </div>
                </div>
            <div className={styles.selectSize}>
            {/* Доставка */}
            <div className={styles.L}>
                            <p>Доставка</p>
                            <div >
                                <div>
                                    <input type="radio" id="no" name="Delivery" value={true} checked={ hidDiv ? true : false } onChange={(e)=>{setHidDiv(true)}} />
                                    <label for="huey">Не нужна</label>
                                </div>
                                <div>
                                    <input type="radio" id="yes" name="Delivery" value={false} checked={!hidDiv ? true : false} onChange={(e)=>{setHidDiv(false)}} />
                                    <label for="huey">Нужна</label>
                                </div>
                            </div>
                            {numberDeliveDiv}
                            </div>
            {/* Выбор монтажа */}
                <div className={styles.R}>
                            <p>Монтаж</p>
                            <div >
                                <div>
                                    <input type="radio" id="no" name="Montage" value="Нет" checked={ montage === false ? true : false} onChange={(e)=>{setMontageTarget(e.target.value)}} />
                                    <label for="huey">Не нужен</label>
                                </div>
                                <div>
                                    <input type="radio" id="yes" name="Montage" value="Да" checked={ montage === true ? true : false} onChange={(e)=>{setMontageTarget(e.target.value)}} />
                                    <label for="huey">Нужен</label>
                                </div>
                            </div>
                </div>

            </div>


                {/* Допы */}
                 <div className={styles.selectSize}>
                    <div className={styles.R}>
                    <p>Дополнительные опции</p>
                    <div>
                        <input type="checkbox" name={optionsArr[0].name} 
                        checked={option0}
                        value={!option0 ? true: false}
                        onChange={(e)=>toggleOption0(!option0)}
                                 />
                                <label for={optionsArr[0].name}>{optionsArr[0].name} </label>
                        <p/>
                        <input type="checkbox" name={optionsArr[1].name} 
                        checked={option1}
                        value={!option1 ? true: false}
                        onChange={(e)=>toggleOption1(!option1)}
                                 />
                                <label for={optionsArr[1].name}>{optionsArr[1].name} </label>
                        <p/>
                        <input type="checkbox" name={optionsArr[2].name} 
                        checked={option2}
                        value={!option2 ? true: false}
                        onChange={(e)=>toggleOption2(!option2)}
                                 />
                                <label for={optionsArr[2].name}>{optionsArr[2].name} </label>
                        <p/>       
                        </div>
                    </div>
                </div>

    </div>
)};