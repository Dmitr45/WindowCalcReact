import { createContext, useState, useCallback } from 'react';






export const useCreateAppContext = function(props) {

    const [typeWindow, setTypeWindow] = useState(props.typeWindow || 3); // Колличество окон 1-4
    const toggleTypeWindow = useCallback((num) => {setTypeWindow(num)});

    const [widthWindow, setWidthWindow] = useState(props.widthWindow ||  1000); // Ширина окна, мм
    const [heightWindow, setHeightWindow] = useState(props.heightWindow ||  2000); // Высота окна, мм
    const toggleWidthWindow = useCallback((num)=> {setWidthWindow(num)});
    const toggleHeightWindow = useCallback((num)=> {setHeightWindow(num)});



    const [profile, setProfile] = useState(props.profile ||  "Reynaers");  // Профиль окна "Reynaers" || "Alutech" 
    const toggleProfile = useCallback((num)=> {setProfile(num)});

    const [subReynaers, setSubReynaers] = useState(props.subReynaers ||  "Masterline 8");  // Профиль окна "Masterline 8" || Slim Line 38 
    const toggleSubReynaers  = useCallback((num)=> {setSubReynaers(num)});

    const [subAlutech, setSubAlutech] = useState(props.subAlutech ||  "W62");  // Профиль окна "W62" || W72 
    const toggleSubAlutech  = useCallback((num)=> {setSubAlutech(num)});


    
    return {

        typeWindow, toggleTypeWindow, // Кол-во створок
        widthWindow, toggleWidthWindow, // Размер окна [высота, ширина], мм
        heightWindow, toggleHeightWindow,
        profile, toggleProfile, // Профиль окна
        subReynaers, toggleSubReynaers, // Субпрофили "Reynaers"
        subAlutech, toggleSubAlutech, // Субпрофили "Alutech"









    };
  }