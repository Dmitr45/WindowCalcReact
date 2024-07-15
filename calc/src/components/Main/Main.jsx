import { useState } from 'react';
import styles from "./styles.module.css";
import Window from "../Window/Window";
import CalcNav from "../CalcNav/CalcNav";
import Colors from '../Colors/Colors';
import Payment from '../Payment/Payment';



export default function Main(){

return (
    <div className={styles.calc}>
        <div className={styles.container}>

                <div class={styles.left}>
                    <Window/>
                    <Payment/>
                </div>

                <div class={styles.right}>
                    <CalcNav/>
                    <Colors/>
                </div>

        </div>
    </div>
)};