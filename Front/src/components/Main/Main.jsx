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
                <div className={styles.div}>
                    <Window/>
                    <Payment/> 
                </div>
                <div className={styles.div}>
                    <CalcNav/>
                    <Input/>
                <div style={{"textAlign": "end", "fontSize": 10+"px", "color": "gray", "margin": 20 + "px", "opacity": "0.1"}}> Автор приложения <a  href="http://pletnevd.com" target="blanck" style={{"color":"gray", "textDecoration": "none"}}>Плетнев Дмитрий</a></div>
                </div>
                <div className={styles.div}>

                </div>

        </div>
            
        </AppContextProvider>

    </div>
)};