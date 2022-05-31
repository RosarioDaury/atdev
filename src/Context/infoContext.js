import { createContext, useState } from "react";
import { Average, Total, Daily, Preaviso, Cesantia, Vacaciones, Doble } from "../Helpers/Calculos";

export const InfoContext = createContext();

const initialState = {
    initialDate: '',
    finalDate: '',
    period: 'mensual',
    type: 'ordinario'
}

export const InfoProvider = ({ children }) => {
    const [info, setInfo] = useState(initialState);
    const [allSalaries, setAllSalaries] = useState({});
    const [Time, setTime] = useState({ years: 0, months: 0, days: 0 });
    const [summary, setSummary] = useState({ total: 0, average: 0, daily: 0 });
    const [preaviso, setPreaviso] = useState({ checked: false, value: 0 });
    const [cesantia, setCesantia] = useState(0);
    const [vacaciones, setVacaciones] = useState({ checked: false, value: 0 });
    const [doble, setDoble] = useState({ checked: true, value: 0 });
    const [length, setLength] = useState(0);


    const Clear = () => {
        setInfo(initialState);
        setAllSalaries({});
        setTime({ years: 0, months: 0, days: 0 });
        setSummary({ total: 0, average: 0, daily: 0 });
        setPreaviso({ checked: false, value: 0 });
        setCesantia(0);
        setVacaciones({ checked: false, value: 0 });
        setDoble({ checked: true, value: 0 });
        setLength(0);
    }

    const onChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const Calculate = (l) => {
        const all = [];
        for (var i in allSalaries) {
            all.push(allSalaries[i]);
        }

        if (all.length === l) {

            setSummary({ total: Total(all), average: Average(all, info.period), daily: Daily(all, info.period, info.type) });


        } else {
            window.alert("No se puede calcular el sueldo hasta que se hayan calculado todos los salarios");
        }
    }

    const CalculatePrestaciones = () => {
        const { initialDate, finalDate, period, type } = info;

        if (initialDate && finalDate && period && type) {

            setPreaviso({ checked: preaviso.checked, value: Preaviso(preaviso, Time, summary) });
            setCesantia(Cesantia(Time, summary));
            setVacaciones({ checked: vacaciones.checked, value: Vacaciones(vacaciones, Time, summary, info) });
            setDoble({ checked: doble.checked, value: Doble(info, doble, summary, Time) });

        } else {
            window.alert("No se puede calcular el sueldo hasta que se hayan ingresado todos los datos");
        }
    }

    const getTime = () => {
        const { initialDate, finalDate, period, type } = info;

        if (initialDate && finalDate && period && type) {

            const first = new Date(initialDate);
            const second = new Date(finalDate);
            const difference = second - first;
            const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
            const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor(((difference % (1000 * 60 * 60 * 24 * 365)) % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

            setTimeout(() => {
                setTime({ years, months, days });
            }, 1000);

        } else {
            window.alert("Faltan datos");
        }
    }




    const data = { info, onChange, allSalaries, setAllSalaries, getTime, Time, Calculate, summary, setPreaviso, preaviso, CalculatePrestaciones, cesantia, vacaciones, setVacaciones, doble, setDoble, Clear, length, setLength };

    return <InfoContext.Provider value={data}>{children}</InfoContext.Provider>
};