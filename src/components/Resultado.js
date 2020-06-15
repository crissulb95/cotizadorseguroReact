import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Resultado = ({ cotizacion }) => {

    return (
        (cotizacion === 0) 
        ? <Mensaje>Por favor, elige la marca, el año y el plan que quieras cotizar</Mensaje> 
        : <ResultadoCotizacion>
            <TransitionGroup
                component='span'
                className='resultado'
            >
                <CSSTransition
                    classNames='resultado'
                    key={cotizacion}
                    timeout={{ enter: 500, exit: 500 }}
                >
                    <Total> La cotización total será de $<span>{cotizacion}</span> </Total>
                </CSSTransition>
            </TransitionGroup>
        </ResultadoCotizacion>
    );
}

const Mensaje = styled.p`
    background: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background: rgb(127, 224, 237);
    margin-top: 3rem;
    position: relative;
`;

const Total = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;



Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado;