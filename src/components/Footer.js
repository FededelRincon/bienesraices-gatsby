import React from 'react';
import { css } from '@emotion/react';


const Footer = () => {
    return (
    
        <>
            <footer
                css={css`
                    background-color: #035397;
                    padding: 1rem;
                    margin-top: 2rem;
                    text-align: center;
                    color: #FFF;
                    /* border-radius: 3rem; */
                    
                    -webkit-border-top-left-radius: 150px;
                    -webkit-border-top-right-radius: 150px;
                    -moz-border-radius-topleft: 150px;
                    -moz-border-radius-topright: 150px;
                    border-top-left-radius: 150px;
                    border-top-right-radius: 150px;
                `}
            >

                Sitio creado por FDR. Todos los derechos reservados &copy; 
            </footer>
        </>

    );
}
 
export default Footer;