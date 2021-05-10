import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
    //Definir state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false)

    const definirPresupuesto = e =>{
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //Submit para definir el presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();

        //Validar
    if(cantidad < 1 || isNaN(cantidad)) {
        guardarError(true);
        return;
    }
        //Si pasa la validacion
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
    }
    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
        {error ? <Error mensaje="El presupuesto en incorrecto"/> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    className="u-full-width"
                    type="number"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input 
                    className="button-primary u-full-width"
                    type="submit"
                    value="Ingresar"
                    />
            </form>
        </Fragment>
     );
}
 
Pregunta.propTypes = {
    guardarPresupuesto : PropTypes.func.isRequired,
    guardarRestante : PropTypes.func.isRequired,
    actualizarPregunta : PropTypes.func.isRequired,
}
export default Pregunta;