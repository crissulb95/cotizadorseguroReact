import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { years, baseMarca, basePlan } from './helper';

const Formulario = ({ updateResumen, updateCargando }) => {

    const [ datos, updateDatos ] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [ error, updateError ] = useState(false);

// extraer los datos del state
    const { marca, year, plan } = datos;

// leer los datos del formulario y colocarlos en el state
    const getInfo = e => {
        updateDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        if(marca.trim() === '' || year.trim() === '' || plan.trim() === '' ) {
            updateError(true);
            return;
        }

        updateError(false);

        // precio base del seguro
        let base = 2000;

        //obtener diferencia de años
        const diferencia = years(year);

        //por cada año se resta 3%
        base -= (( diferencia * 3 ) * base) / 100 ;
        
        //suma americano 15% - asiatico 5% - europeo 30%
        base *= baseMarca(marca);
        
        //suma basico 20% - completo 50%
        base *= basePlan(plan);
        
        //spinner
        updateCargando(true);
        setTimeout( () => {
            //total
            updateResumen({
                cotizacion: (Number(base.toFixed(2))),
                datos
            });
            updateCargando(false);
        }, 3000 );

        
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            <DivCampo>
                <Label>Marca</Label>
                <Select
                    name='marca'
                    value={marca}
                    onChange={getInfo}
                >
                    <option value=''>--- Seleccione ---</option>
                    <option value='americano'> Americano </option>
                    <option value='europeo'> Europeo </option>
                    <option value='asiatico'> Asiático </option>
                </Select>
            </DivCampo>

            <DivCampo>
                <Label>Año</Label>
                <Select
                    name='year'
                    value={year}
                    onChange={getInfo}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </DivCampo>

            <DivCampo>
                <Label>Plan</Label>
                <InputRadio 
                    type='radio' 
                    name='plan'
                    value='basico'
                    checked= {plan === 'basico'}
                    onChange={getInfo}
                />Básico
                <InputRadio 
                    type='radio' 
                    name='plan'
                    value='completo'
                    checked= {plan === 'completo'}
                    onChange={getInfo}
                />Completo
            </DivCampo>
            
            {error
            ? <DivError> <p>Por favor, complete los campos.</p></DivError>
            : null}

            <Button
                type='submit'
            >Cotizar</Button>
        </form> 
    );
}


const DivError = styled.div`
    background: rgba(255, 0, 0, 0.356);
    color: white;
    padding: .5rem;
    margin: 0 auto 1rem auto;
    display: block;
    width: 90%;
    border: 1px solid rgba(255, 65, 65, 0.815);
    border-radius: .7rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.2rem;
`;

const DivCampo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 0.5rem;
    background: #eee;
    border: 1px solid #e1e1e1;
    border-radius: .7rem;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background: #44A08D;
    font-size: 1rem;
    width: 100%;
    padding: .7rem;
    color: #fff;
    border-radius: .7rem;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    transition: .3s ease-in-out;
    margin-top: 1.5rem;

    &:hover{
        cursor: pointer;
        background: #26C6DA;
        box-shadow:1px 1px 3px 2px grey, 3px 3px 10px 2px #e1e1e1 ;
    }
`;

Formulario.propTypes = {
    updateResumen: PropTypes.func.isRequired,
    updateCargando: PropTypes.func.isRequired
}

export default Formulario;