import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Resumen = ({ datos, cargando }) => {
    //extraer datos
    const { marca, year, plan } = datos;

    if( marca === '' || year === '' || plan === '' || cargando ) {
        return null;
    }

    let padding = {padding : '0.7rem 0'};

    return ( 
        <DivResumen>
            <h2>Resumen de la cotización:</h2>
            <ul style={padding}>
                <LiResumen>Marca: {marca}</LiResumen>
                <LiResumen>Plan: {plan}</LiResumen>
                <LiResumen>Año: {year}</LiResumen>
            </ul>
        </DivResumen>
    );
}
 

const DivResumen = styled.div`
    padding: 1rem 1rem 1rem 5rem;
    text-align: left;
    background: rgba(0, 0, 0, 0.1);
    margin: 3rem auto .7rem auto;
    max-width: 70%;
    font-size: 1.2rem;
`;

const LiResumen = styled.li`
    margin-bottom: .7rem;
    font-size: 1.3rem;
    text-transform: capitalize;

&:last-child{
    margin-bottom: 0;
}
`;


Resumen.propTypes = {
    datos: PropTypes.object.isRequired,
    cargando: PropTypes.bool.isRequired
}

export default Resumen;