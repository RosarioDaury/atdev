import React, { useContext } from 'react'
import { InfoContext } from '../../../Context/infoContext';
import { ResultTable, Div } from './ResultsStyle'

function Results() {
    const NumberFormat = new Intl.NumberFormat('en-US');
    const { summary } = useContext(InfoContext);
    return (
        <Div>
            <ResultTable>
                <thead>
                    <tr>
                        <th>Salario Total</th>
                        <th>Promedio</th>
                        <th>Diario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{`RD$ ${NumberFormat.format(summary.total.toFixed(2))}`}</td>
                        <td>{`RD$ ${NumberFormat.format(summary.average.toFixed(2))}`}</td>
                        <td>{`RD$ ${NumberFormat.format(summary.daily.toFixed(2))}`}</td>
                    </tr>
                </tbody>
            </ResultTable>
        </Div>
    )
}

export default Results