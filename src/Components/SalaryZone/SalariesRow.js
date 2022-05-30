import React, { useContext, useEffect, useState } from 'react'
import { InfoContext } from '../../Context/infoContext';

function SalariesRow(props) {
    const [salaries, setSalaries] = useState({ salary: 0, bonus: 0 });
    const { setAllSalaries, allSalaries } = useContext(InfoContext);
    const NumberFormat = new Intl.NumberFormat('en-US');


    const onChange = (e) => {
        const { name, value } = e.target;
        setSalaries({ ...salaries, [name]: value });
    }

    useEffect(() => {
        let total = (salaries.salary ? parseInt(salaries.salary) : 0) + (salaries.bonus ? parseInt(salaries.bonus) : 0);
        setAllSalaries({ ...allSalaries, [props.index + 1]: total });
    }, [salaries]);

    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>
                <input type="number" min={1} placeHolder={0} name="salary" onChange={onChange} />
            </td>
            <td>
                <input type="number" min={1} placeHolder={0} name="bonus" onChange={onChange} />
            </td>
            <td>{NumberFormat.format((salaries.salary ? parseInt(salaries.salary) : 0) + (salaries.bonus ? parseInt(salaries.bonus) : 0))}</td>
        </tr>
    )
}

export default SalariesRow