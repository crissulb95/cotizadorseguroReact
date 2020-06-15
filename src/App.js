import React, { Fragment, useState } from 'react';
import Header from './components/Header.js';
import Formulario from './components/Formulario.js';
import Resumen from './components/Resumen.js';
import Resultado from './components/Resultado.js';
import Spinner from './components/Spinner.js';
import styled from '@emotion/styled';


function App() {

  const [resumen, updateResumen] = useState({
    
    cotizacion:0,
    datos: {
      marca: '',
      year: '', 
      plan: ''
    }

  });

  const [ cargando, updateCargando ] = useState( false );

  //extraer datos 
  const { datos, cotizacion } = resumen;

  return (
    <Fragment>
      <Header 
      titulo='Cotizador de Seguros'
    />
    <Div>
      <Formulario 
        updateResumen={ updateResumen }
        updateCargando={ updateCargando }
      />

      { cargando
      ? <Spinner />
      : null }

      <Resumen 
        datos={ datos }
        cargando={ cargando }
      />

      { !cargando 
      ? <Resultado 
        cotizacion={ cotizacion }
      />
      : null }

      
    </Div>
    </Fragment>
  );
}

const Div = styled.div`
  background: #fff;
  padding: 3rem;
  max-width: 650px;
  margin: 3rem auto;
  box-shadow: 1px 0px 10px 3px rgb(55,55,55);
  border-radius: 0.8rem
`;

export default App;
