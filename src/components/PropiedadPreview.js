import React from 'react';
import Iconos from './Iconos';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import urlSlug from 'url-slug';


const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #75ab00;
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
`;


const Card = styled.div`
    /* border: 2px solid #75ab00; */
    border: 2px solid #bbbbbb;
    /* border-radius: 15px; */
    border-radius: 2rem;
    overflow: auto;
    margin-bottom: 2rem;

    img {
        max-width: 100%;
    }
`;

const Contenido = styled.div`
    padding: 2rem;
    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }

    .precio {
        font-size: 2rem;
        color: #75AB00;

    }
    .centrado {
        padding: .7rem;
        text-align: center;
        height: 9rem;
    }
`;



const PropiedadPreview = ({ propiedad }) => {
    // console.log(propiedad)
    const { 
        nombre, 
        wc,
        estacionamiento,
        habitaciones,
        precio,
        imagen
    } = propiedad;

    // console.log(imagen)
    // console.log(imagen.localFile.childImageSharp.gatsbyImageData)
    
    return (
        <>
            <Card>
                <Link to={ urlSlug(nombre) }>
                    <GatsbyImage 
                        image={getImage(imagen.localFile.childImageSharp.gatsbyImageData)} 
                        layout="fixed"
                        alt="propiedades" 
                    />
                </Link>
                
                <Contenido>
                    <div className="centrado">
                        <h3>{nombre}</h3>

                    </div>

                    <p className="precio"> $ {precio} </p>

                    <Iconos 
                        wc={wc}
                        estacionamiento={estacionamiento}
                        habitaciones={habitaciones}
                    />

                    <Boton to={ urlSlug(nombre)} >
                        Visitar Propiedad
                    </Boton>

                </Contenido>
            </Card>
        </>
    );
}
 
export default PropiedadPreview;