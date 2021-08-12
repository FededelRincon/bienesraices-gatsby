import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import styled from '@emotion/styled';

const ListadoIconos = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li {
        display: flex;
        .bigger {
            margin-right: 1rem;
        }
    }
`;

const Iconos = ({ wc, estacionamiento, habitaciones }) => {
    

    return (
        <>
            <ListadoIconos>
                <li> 
                    <StaticImage 
                        className="bigger" 
                        src="../images/iconos/icono_wc.svg" 
                        alt="ico_bathroom" 
                        layout="fixed"
                        // width={30}
                        // height={100}
                    />
                    <p>{ wc }</p> 
                </li>
                <li>
                    <StaticImage 
                        className="bigger" 
                        src="../images/iconos/icono_estacionamiento.svg" 
                        alt="ico_garage"
                        layout="fixed"
                        width={40}
                        // height={60} 
                    />
                    <p>{ estacionamiento }</p>
                </li>
                <li>
                    <StaticImage 
                        className="bigger" 
                        src="../images/iconos/icono_dormitorio.svg" 
                        alt="ico_bedroom" 
                        layout="fixed"
                        width={45}
                        // height={100}
                    />
                    <p>{ habitaciones }</p> 
                </li>
            </ListadoIconos>
        </>
    );
}
 
export default Iconos;