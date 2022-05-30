import React, { useContext } from 'react'
import { InfoContext } from '../../../Context/infoContext';
import { Div } from './FinalResultsStyle'

function FinalResult() {
    const NumberFormat = new Intl.NumberFormat('en-US');
    const { setPreaviso, preaviso, CalculatePrestaciones, cesantia, vacaciones, setVacaciones, doble, setDoble, Time } = useContext(InfoContext);

    return (
        <Div>
            <div>
                <label htmlFor='check-preaviso'><h4 style={{ display: "inline" }}>¿Fue Usted Preavisado?</h4></label>
                <input id="check-preaviso" type="checkbox" onChange={() => setPreaviso({ checked: !preaviso.checked, value: preaviso.value })} />
                <label ><b>Por Preaviso: </b>{`RD$${NumberFormat.format(preaviso.value)}`}</label>
            </div>
            <br />
            <hr />
            <br />
            <div>
                <label><b>Por Cesantia: </b>{`RD$${NumberFormat.format(cesantia)}`}</label>
            </div>
            <br />
            <hr />
            <br />
            <div>
                <label htmlFor='check-vacaciones'><h4 style={{ display: "inline" }}>¿Tomo usted vacaciones?</h4></label>
                <input id="check-vacaciones" type="checkbox" onChange={() => setVacaciones({ checked: !vacaciones.checked, value: vacaciones.value })} />
                <label><b>Por Vacaciones: </b>{`RD$${NumberFormat.format(vacaciones.value)}`}</label>
            </div>
            <br />
            <hr />
            <br />
            <div style={{ boxSizing: "border-box", width: "100%", padding: "2rem", background: "gray" }}>
                <label style={{ color: "white" }}><b>Sub-Total: </b>{`RD$${NumberFormat.format(preaviso.value + cesantia + vacaciones.value)}`}</label>
            </div>
            <br />
            <hr />
            <br />
            <div>
                <label htmlFor='check-doble'><h4 style={{ display: "inline" }}>¿Desea incluir pago navidad?</h4></label>
                <input id="check-doble" defaultChecked type="checkbox" onChange={() => setDoble({ checked: !doble.checked, value: doble.value })} />
                <label><b>Por Pago Navidad: </b>{`RD$${NumberFormat.format(doble.value)}`}</label>
            </div>

            <br />
            <hr />
            <br />

            <div style={{ boxSizing: "border-box", width: "100%", padding: "2rem", background: "#6988e6" }}>
                <label style={{ color: "white" }}> <b>Tiempo Laborando: </b>{`${Time.years} Años, ${Time.months} Meses, ${Time.days} Dias`}</label>
            </div>

            <div style={{ boxSizing: "border-box", width: "100%", padding: "1.5rem", background: "gray" }}>
                <label style={{ color: "white" }}><b>Total a recibir: </b>{`RD$${NumberFormat.format(preaviso.value + cesantia + vacaciones.value + doble.value)}`}</label>
            </div>

            <br />

            <button onClick={CalculatePrestaciones}>Calcular Prestaciones</button>
        </Div>
    )
}

export default FinalResult