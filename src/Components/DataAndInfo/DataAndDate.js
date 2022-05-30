import React, { useContext } from 'react'
import { InfoContext } from '../../Context/infoContext';
import { DivData } from './DataAndDateStyles'


function DataAndDate() {
    const { onChange, getTime } = useContext(InfoContext);

    return (
        <DivData>
            <div className="left">
                <h2>Informacion de Usuario</h2>
                <div>
                    <br />
                    <input type="text" id="identity" placeholder='Documento de identificacion' />
                </div>
                <br />
                <div>
                    <br />
                    <input type="text" id="nombre" placeholder='Nombre' />
                </div>
                <br />
                <div>
                    <br />
                    <input type="text" id="company" placeholder='Nombre de la Compañia' />
                </div>

                <br />
                <br />

                <div>
                    <h2>Fechas</h2>
                    <div>
                        <label htmlFor='fecha_inicio'>Fecha de Inicio</label>
                        <br />
                        <input type="date" id="fecha_inicio" name="initialDate" onChange={onChange} style={{ color: "gray" }} />
                    </div>

                    <br />

                    <div>
                        <label htmlFor='fecha_final'>Fecha de Salida</label>
                        <br />
                        <input type="date" id="fecha_final" name="finalDate" onChange={onChange} style={{ color: "gray" }} />
                    </div>
                </div>
            </div>


            <div className='right'>
                <div>
                    <h2> Seleccion periodo </h2>

                    <div id="radios" className='radios'>

                        <div className="radio">
                            <input type="radio" name="period" value="mensual" onChange={onChange} defaultChecked />
                            <label>Mensual</label>
                        </div>

                        <div className="radio">
                            <input type="radio" name="period" value="quincenal" onChange={onChange} />
                            <label>Quincenal</label>
                        </div>

                        <div className="radio">
                            <input type="radio" name="period" value="semanal" onChange={onChange} />
                            <label>Semanal</label>
                        </div>

                    </div>
                </div>
                <br />
                <br />
                <div>
                    <h2>Tipo de calculo</h2>
                    <div id="radios" className='radios'>
                        <div className="radio">
                            <input type="radio" name="type" value="ordinario" onChange={onChange} defaultChecked />
                            <label>Ordinario</label>
                        </div>

                        <div className="radio">
                            <input type="radio" name="type" value="intermitente" onChange={onChange} />
                            <label>Intermitente</label>
                        </div>
                    </div>
                </div>

                <br />
                <br />

                <button onClick={() => getTime()}>Empezar</button>

            </div>

        </DivData>
    )
}

export default DataAndDate