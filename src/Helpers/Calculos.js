export const Total = (arr) => {
    let total = 0;
    for (var i of arr) {
        total += i;
    }

    return total;
}

export const Average = (arr, period) => {
    let average = 0;
    for (var i of arr) {
        average += i;
    }

    switch (period) {
        case "mensual":
            average = average / arr.length;
            break;

        case "quincenal":
            average = average / (arr.length / 2);
            break;

        case "semanal":
            average = average / (arr.length / 4.333);
            break;

        default:
            break;
    }



    return average;
}

export const Daily = (arr, period, type) => {
    let daily;

    if (type === "ordinario") {
        daily = Average(arr, period) / 23.83;
    } else {
        daily = Average(arr, period) / 26;
    }

    return daily;
}

export const Preaviso = (preaviso, time, summary) => {
    let preavisoValue;
    if (preaviso.checked === false) {
        if (time.years > 0) {
            preavisoValue = summary.daily * 28;
        } else {
            if (time.months >= 3 && time.months <= 5) {
                preavisoValue = summary.daily * 7;
            } else {
                if (time.months >= 6 && time.months <= 11) {
                    preavisoValue = summary.daily * 14;
                } else {
                    preavisoValue = 0;
                }
            }
        }
    } else {
        preavisoValue = 0;
    }

    return preavisoValue;
}

const getDays = (months) => {
    if (months < 3) {
        return 0
    } else {
        if (months >= 3 && months <= 5) {
            return 6
        } else {
            if (months >= 6 && months <= 11) {
                return 13
            }
        }
    }

}

export const Cesantia = (time, summary) => {
    let cesantiaValue;
    let days;
    if (time.years > 5) {
        days = (time.years * 23) + (getDays(time.months));
        cesantiaValue = summary.daily * days;
    } else {
        if (time.years >= 1 && time.years <= 5) {
            days = (time.years * 21) + (getDays(time.months));
            console.log(getDays(time.months));
            cesantiaValue = summary.daily * days;
        } else {
            if (time.months >= 6 && time.months <= 11) {
                days = 13;
                cesantiaValue = summary.daily * days;
            } else {
                if (time.months >= 3 && time.months <= 5) {
                    days = 6;
                    cesantiaValue = summary.daily * days;
                } else {
                    cesantiaValue = 0;
                }
            }
        }
    }

    return cesantiaValue;
}

export const Vacaciones = (vac, time, summary, info) => {
    let vacacionesValue;
    if (vac.checked === false) {
        if (time.years > 5) {
            vacacionesValue = summary.daily * 18;
        } else {
            if (time.years >= 1 && time.years <= 5) {
                vacacionesValue = summary.daily * 14;
            } else {
                if (time.months > 4) {
                    vacacionesValue = summary.daily * (time.months + 1);
                } else {
                    vacacionesValue = 0;
                }
            }
        }
    } else {
        let date, year, final, months;

        if (time.years > 0) {
            date = new Date(info.finalDate);
            year = date.getFullYear();
            final = new Date(info.finalDate);
            let difference = final - new Date(year, 0, 1);
            months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        } else {
            months = time.months;
        }

        if (time.months >= 4) {
            vacacionesValue = summary.daily * (months + 1);
        } else {
            vacacionesValue = 0;
        }
    }

    return vacacionesValue;
}

export const Doble = (info, doble, summary, time) => {
    let dobleValue, date, year, final, months, days;

    if (time.years > 0) {
        date = new Date(info.finalDate);
        year = date.getFullYear();
        final = new Date(info.finalDate);
        let difference = final - new Date(year, 0, 1);
        months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    } else {
        months = time.months;
        days = time.days;
    }



    if (doble.checked === true) {
        if (months > 0) {
            dobleValue = (summary.average * months);
            if (days > 0) {
                let plus = summary.average * (days / 30);
                dobleValue = (dobleValue + plus) / 12;
            } else {
                dobleValue = dobleValue / 12;
            }
        } else {
            if (days > 0) {
                dobleValue = summary.average * (days / 30);
                dobleValue = dobleValue / 12;
            } else {
                dobleValue = 0;
            }
        }
    } else {
        dobleValue = 0;
    }

    return dobleValue;

}