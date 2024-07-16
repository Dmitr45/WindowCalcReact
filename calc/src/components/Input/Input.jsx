import { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";


export default function Input(){
    let {typeWindow, toggleTypeWindow} = useAppContext(); // Сколько секций у окна
    let {widthWindow, toggleWidthWindow, 
        heightWindow, toggleHeightWindow} = useAppContext(); // Размер окна
    let {profile, toggleProfile} = useAppContext(); // Профиль окна
    let {subReynaers, toggleSubReynaers, // Субпрофили "Reynaers"
         subAlutech, toggleSubAlutech, }  = useAppContext(); // Субпрофили "Alutech"




useEffect(()=>{
if  (widthWindow <= 900) {toggleTypeWindow(1)}
else if (widthWindow <= 1800) {toggleTypeWindow(2)}
else if (widthWindow <= 2700) {toggleTypeWindow(3)}
else  {toggleTypeWindow(4)}

},[widthWindow]);


let selectReynaers = ()=>{ return(
<select name='sub'
        value={subReynaers}
        onChange={(e)=>{toggleSubReynaers(e.target.value)}}
>
    <option value="Masterline 8">Masterline 8</option>
    <option value="Slim Line 38">Slim Line 38</option>
</select>
)}; 

let selectAlutech = ()=>{ return(
<select name='sub'
        value={subAlutech}
        onChange={(e)=>{toggleSubAlutech(e.target.value)}}
>
    <option value="W62">W62</option>
    <option value="W72">W72</option>
</select>
)}; 

let [Selector, setSelector] = useState();



useEffect(()=>{
    profile === "Reynaers" ? setSelector(selectReynaers) : setSelector(selectAlutech);
    toggleSubAlutech(subAlutech);
    toggleSubReynaers(subReynaers);

},[profile, subReynaers, subAlutech]);


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
                            value={profile}
                            onChange={(e)=>{toggleProfile(e.target.value)}}
                            >
                                <option value="Reynaers">Reynaers</option>
                                <option value="Alutech">Alutech </option>
                            </select>

                            </div>
                </div>
                <div className={styles.R}>
                            <p>Тип профиля</p>
                            <div className={styles.selectDiv}>
                            {Selector}
                            </div>
                </div>
            </div>
    </div>
)};