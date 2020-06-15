import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';


const Header = ({ titulo }) => {
    return ( 
        <HeaderContainer>
            <TitleH2>{titulo}</TitleH2>
        </HeaderContainer>
    );
}


const HeaderContainer = styled.header`
    background: rgb(240,240,240);
    color: #44A08D;
    padding: 10px;
    border-end-end-radius: 1.2rem ;
    border-end-start-radius: 1.2rem ;
    box-shadow: 1px 0px 10px 3px #111;
`;

const TitleH2 = styled.h2`
    font-size : 2rem;
    margin: 0;
    font-weight: 500;
    font-family: 'Montserrat', serif;
    text-align: center;
`;


Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;