import React, { useContext, useEffect } from 'react'
import { InfoContext } from '../../Context/infoContext';
import SalariesRow from './SalariesRow'
import { Table, Div } from './SalariesTableStyles'
import { useRef } from 'react';
function Salaries() {
    const { Time, Calculate, length, setLength } = useContext(InfoContext);
    const ref = useRef();
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
                        <th></th>
                    </tr>
                </thead>
                <tbody ref={ref}>
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
            <br />
            <br />
            {length > 0 ? <button onClick={() => Calculate(length, ref.current)}>2. Click Aqui luego de ingresar sueldos</button> : ""}
        </Div>
    )
}

export default Salaries