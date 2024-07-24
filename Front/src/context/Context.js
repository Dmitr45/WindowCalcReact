import { createContext, useState, useCallback, useRef, useEffect } from 'react';
import axios from 'axios';

    const API_URL = "http://localhost:8000/Server/index.php";




export const getData = async () => {
    console.log('fetch')
  try {
    const resp = await axios.get(`${API_URL}`).then(resp => resp.data)
    console.log(resp.data)
    return resp.data
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};



export const useCreateAppContext = function(props) {





// Входные данные: ============================================================================================================
const maxWindowSash = 4; //  Максимальное кол-во створок
const maxWidthSash = 800; // Макс ширина створки
const maxHeightSash = 2200; // Макс высота створки
const costGlass = [0, 2000, 2500] // Стоимость стеклопакета 0, одинарного и двойного остекления
const costHardenin = 1000; // Стоимость закалки
const costhiddHardware = 1000; // Скрытая фурнитура
const costMontage = 3000; // Монтаж
const costDelivery = 120; // Доставка руб/км


const profilesArr = 
    [{
        name: "Reynaers",
        subProf: [{
            name: "Masterline 8",
            cost: 30000
        },
        {
            name: "Slim Line 38",
            cost: 32000  
        }]
    }, 
    {
        name: "Alutech",
        subProf: [{
            name: "W62",
            cost: 22000
        },
        {
            name: "W72",
            cost: 26000  
        }]
    }
];


const colorArr = 
    [{
        name: "Одноцветная",
        col: [{
            name: "RAL Глянец",
            cost: 0
        },
        {
            name: "RAL Муар",
            cost: 500  
        },
        {
            name: "Decoral",
            cost: 4000 
        }
        ]
    }, 
    {
        name: "Двухцветная",
        col: [{
            name: "RAL Глянец",
            cost: 1000
        },
        {
            name: "RAL Муар",
            cost: 1500  
        },
        {
            name: "Decoral",
            cost: 5000 
        }]
    }
];


const optionsArr = [

    {name: "Отлив",
        cost: 200 // м погонный
    },
    {
    name: "Подоконник",
    cost: 300  // м погонный
    },
    {
    name: "Антимоскитная сетка",
    cost: 3000 // шт
    }
];

// const [DATA, setData] = useState();
// useEffect(()=>{
// axios
//   .get("./DATA.json")
//   .then((recpons) => setData(recpons.data))  
//   .then(() => console.log(DATA))
//   .then(()=>{
//     maxWindowSash = DATA.maxWindowSash

//   })
//   .catch((err) => console.log(err));

// },[])






// Контекст для приложения ====================================================================================================



    const [typeWindow, setTypeWindow] = useState(props.typeWindow || 1); // Колличество окон 1-4
    const toggleTypeWindow = useCallback((num) => {setTypeWindow(num)});

    const [widthWindow, setWidthWindow] = useState(props.widthWindow ||  800); // Ширина окна, мм
    const [heightWindow, setHeightWindow] = useState(props.heightWindow ||  1350); // Высота окна, мм
    const toggleWidthWindow = useCallback((num)=> {setWidthWindow(num)});
    const toggleHeightWindow = useCallback((num)=> {setHeightWindow(num)});

    const [profile, setProfile] = useState(props.profile ||  {id: 0, name: profilesArr[0].name});  // Номер профиля  
    const toggleProfile = useCallback((num)=> {setProfile(num)});

    const [subProfile, setSubProfile] = useState(props.subProfile || {id: 0, name: profilesArr[0].subProf[0].name });  // Номер субпрофиля
    const toggleSubProfile  = useCallback((num)=> {setSubProfile(num)});   

    const [multicolor, setMulticolor] = useState(props.multicolor ||  {id: 0, name: colorArr[0].name});  // Кратность окраски 1 или 2
    const toggleMulticolor = useCallback((num)=> {setMulticolor(num)});

    const [paint, setPaint] = useState(props.paint ||  {id: 0, name: colorArr[0].col[0].name});  // Краска
    const togglePaint  = useCallback((num)=> {setPaint(num)});   


    const [glass, setGlass] = useState(props.glass || {id:1, name: "Однокамерное" });  // Однокамерное или двух 1 || 2
    const toggleGlass  = useCallback((num)=> {setGlass(num)});

    const [hardening, setHardening] = useState(props.hardening || true);  // 
    const toggleHardening  = useCallback((num)=> {setHardening(num)}); // Закалка

    const [hiddHardware, setHiddHardware] = useState(props.hiddHardware || false);  //  Скрытая фурнитура
    const toggleHiddHardware  = useCallback((num)=> {setHiddHardware(num)}); 

    const [montage, setMontage] = useState(props.montage || false);  //  Скрытая фурнитура
    const toggleMontage  = useCallback((num)=> {setMontage(num)}); 

    const [delivery, setDelivery] = useState(props.delivery || 0);  //  Скрытая фурнитура
    const toggleDelivery  = useCallback((num)=> {setDelivery(num)}); 

    const [option0, setOptionTide] = useState(props.option0 || false); // отлив
    const toggleOption0 = useCallback((num)=> {setOptionTide(num)}); 
    const [option1, setOptionWindowsill] = useState(props.option1 || false); // Подоконник
    const toggleOption1 = useCallback((num)=> {setOptionWindowsill(num)}); 
    const [option2, setOptionMosquit] = useState(props.option2 || false); // Антимоскитная сетка
    const toggleOption2 = useCallback((num)=> {setOptionMosquit(num)}); 

    
    
    return {
        profilesArr,  // Массив профилей
        maxWidthSash,
        maxWindowSash,
        maxHeightSash,
        costGlass, 
        costHardenin,
        costhiddHardware,
        costMontage,
        costDelivery,
        optionsArr,
        colorArr,

        typeWindow, toggleTypeWindow, // Кол-во створок
        widthWindow, toggleWidthWindow, // Размер окна [высота, ширина], мм
        heightWindow, toggleHeightWindow,
        profile, toggleProfile, // Текущий Профиль окна
        subProfile, toggleSubProfile, // Текущий субпрофиль
        glass, toggleGlass, hardening, toggleHardening, // Остекление
        hiddHardware, toggleHiddHardware,  // Скрытая фурнитура
        montage, toggleMontage, //  Монтаж
        delivery, toggleDelivery,  // Доставка
        option0, toggleOption0, // Опции Отлив
        option1, toggleOption1, // Опции Подоконник
        option2, toggleOption2, // Опции Антимоскитная сетка
        multicolor, toggleMulticolor, // Кратность окрашивания
        paint, togglePaint // Выбранная краска
};
}