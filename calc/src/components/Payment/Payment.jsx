import { useState } from 'react';
import styles from "./styles.module.css";



export default function Payment(){

return (
<div className={styles.calcPayment}>
            <div className={styles.calcPaymentContent}>
                <div>
                    <p>Изделие:</p>
                    <span className={styles.paymentAll}>21 134 ₽</span>
                </div>
                <div>
                    <p>Опции:</p>
                    <span>14 134 ₽</span>
                </div>
                <div>
                    <p>Монтаж:</p>
                    <span> 0 ₽</span>
                </div>
                <div>
                    <p>Доставка:</p>
                    <span>1 000 ₽</span>
                </div>
            </div>

            <div className={styles.calcPaymentBtn}>
                <div> <span> <img src="./img/cart.png" alt="" /> Добавить в корзину</span></div>
                <div><span>Получить расчет</span></div>
            </div>
</div>
)};