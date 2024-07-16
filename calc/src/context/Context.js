import { createContext, useState, useCallback } from 'react';
import {profiles} from './DataBase.js';





export const useCreateAppContext = function(props) {

    const [typeWindow, setTypeWindow] = useState(props.typeWindow || 3); // Колличество окон 1-4
    const toggleTypeWindow = useCallback((num) => {setTypeWindow(num)});

    const [widthWindow, setWidthWindow] = useState(props.widthWindow ||  1000); // Ширина окна, мм
    const [heightWindow, setHeightWindow] = useState(props.heightWindow ||  2000); // Высота окна, мм
    const toggleWidthWindow = useCallback((num)=> {setWidthWindow(num)});
    const toggleHeightWindow = useCallback((num)=> {setHeightWindow(num)});



    const [profile, setProfile] = useState(props.profile ||  profiles[0]);  // Профиль окна
    const toggleProfile = useCallback((num)=> {setProfile(num)});


    
    return {

        typeWindow, toggleTypeWindow, // Кол-во створок
        widthWindow, toggleWidthWindow, // Размер окна [высота, ширина], мм
        heightWindow, toggleHeightWindow,
        profile, toggleProfile, // Профиль окна











    };
  }