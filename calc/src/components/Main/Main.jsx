import {AppContextProvider} from "../../context/ContextProvider";
import styles from "./styles.module.css";
import Window from "../Window/Window";
import CalcNav from "../CalcNav/CalcNav";
import Colors from '../Colors/Colors';
import Payment from '../Payment/Payment';
import Input from "../Input/Input";




export default function Main(){

return (
    <div className={styles.calc}>
        <AppContextProvider>
        <div className={styles.container}>
                <div class={styles.div}>
                    <Window/>
                    
                </div>
                <div class={styles.div}>
                    <CalcNav/>
                    <Input/>
                    <Colors/>
                </div>
                <div class={styles.div}>
                    <Payment/>    
                </div>

        </div>

        </AppContextProvider>
    </div>
)};