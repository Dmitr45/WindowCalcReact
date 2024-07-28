import {AppContextProvider} from "../../context/ContextProvider";
import styles from "./styles.module.css";
import Window from "../Window/Window";
import CalcNav from "../CalcNav/CalcNav";
import Payment from '../Payment/Payment';
import Input from "../Input/Input";




export default function Main(){

return (
    <div className={styles.calc}>
        <AppContextProvider>
        <div className={styles.container}>
                <div class={styles.div}>
                    <Window/>
                    <Payment/> 
                </div>
                <div class={styles.div}>
                    <CalcNav/>
                    <Input/>
                <div style={{"text-align": "end", "font-size": 10+"px", "color": "gray", "margin": 20 + "px", "opacity": "0.1"}}> Автор приложения <a  href="http://pletnevd.com" target="blanck" style={{"color":"gray", "text-decoration": "none"}}>Плетнев Дмитрий</a></div>
                </div>
                <div class={styles.div}>

                </div>

        </div>
            
        </AppContextProvider>

    </div>
)};