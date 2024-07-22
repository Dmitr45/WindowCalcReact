import { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";


export default function Main(){
    let {typeWindow, toggleTypeWindow} = useAppContext();
    let {widthWindow, toggleWidthWindow, 
        heightWindow, toggleHeightWindow} = useAppContext();
    let { maxWindowSash, maxWidthSash } = useAppContext();

 useEffect(()=>{
if (widthWindow/maxWidthSash <= 1  && maxWindowSash >= 1) {toggleTypeWindow(1)};
if (widthWindow/maxWidthSash > 1  && maxWindowSash >= 2) {toggleTypeWindow(2)};
if (widthWindow/maxWidthSash > 2  && maxWindowSash >= 3) {toggleTypeWindow(3)};
if (widthWindow/maxWidthSash > 3  && maxWindowSash >= 4) {toggleTypeWindow(4)};
 }, [widthWindow]);


let Item1 =  ()=>  {return  (<div class={typeWindow !== 1 ? styles.item : styles.itemSelect} onClick={()=>{ toggleWidthWindow(maxWidthSash) }}>
                    <img src="./prime1.png" alt=""/>
                    <p>Одностворчатое</p>
                </div>)}


let Item2 =  ()=>  {return  (  <div class={typeWindow !== 2 ? styles.item : styles.itemSelect} onClick={()=>{ toggleWidthWindow(maxWidthSash*2)}}>
                                    <img src="./prime2.png" alt=""/>
                                    <p>Двустворчатое</p>
                                    </div>)}

let Item3 =  ()=>  {return  (      <div class={typeWindow !== 3 ? styles.item : styles.itemSelect} onClick={()=>{ toggleWidthWindow(maxWidthSash*3)}}>
                                        <img src="./prime3.png" alt=""/>
                                        <p>Трехстворчатое</p>
                                        </div>)}


let Item4 =  ()=>  {return  (  <div class={typeWindow !== 4 ? styles.item : styles.itemSelect} onClick={()=>{ toggleWidthWindow(maxWidthSash*4)}}>
                            <img src="./prime4.png" alt=""/>
                            <p>Четырехстворчатое</p>
                            </div>)}
                            
return (
            <div className={styles.header}>
                    { maxWindowSash >= 1 ? <Item1/> : <></>}
                    { maxWindowSash >= 2 ? <Item2/> : <></>}
                    { maxWindowSash >= 3 ? <Item3/> : <></>}
                    { maxWindowSash >= 4 ? <Item4/> : <></>}
            </div>

)};