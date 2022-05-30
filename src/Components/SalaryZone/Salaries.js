import React, { useContext, useEffect, useState } from 'react'
import { InfoContext } from '../../Context/infoContext';
import SalariesRow from './SalariesRow'
import { Table, Div } from './SalariesTableStyles'
function Salaries() {
    const { Time, Calculate } = useContext(InfoContext);
    const [length, setLength] = useState(0);
    useEffect(() => {
        if (Time.years > 0) {
            setLength(12);
        } else {
            if (Time.months > 0) {
                setLength(Time.months);
            } else {
                if (Time.days > 0) {
                    setLength(1);
                }
            }
        }
    }, [Time])


    return (
        <Div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Salario</th>
                        <th>Comision</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {length > 0
                        ? (
                            new Array(length).fill(0).map((value, index) => <SalariesRow index={index} key={index} />)
                        ) : (
                            <tr>
                                <td>--------------</td>
                                <td>--------------</td>
                                <td>--------------</td>
                                <td>--------------</td>
                            </tr>
                        )}
                </tbody>
            </Table>
            <br />
            {length > 0 ? <button onClick={() => Calculate(length)}>Calcular Sueldo</button> : ""}
        </Div>
    )
}

export default Salaries