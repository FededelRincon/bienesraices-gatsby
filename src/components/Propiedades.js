import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Iconos from './Iconos';
import Layout from './Layout';
import { graphql } from 'gatsby';



const Contenido = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr; //66% y 33%
        column-gap: 5rem;
    }
`;

const SideBar = styled.aside`
    .precio {
        font-size: 2rem;
        color: #035397;
    }
    .agente {
        margin-top: 4rem;
        border-radius: 2rem;
        background-color: #e4b85b;
        padding: 3rem;
        color: #FFF;

        p {
            margin: 0;
        }
    }
`;

export const query = graphql`
    query ($id: String!) {
        allStrapiPropiedades(filter: {id: {eq: $id}}) {
            nodes {
                nombre
                descripcion
                wc
                estacionamiento
                habitaciones
                precio
                agentes {
                    email
                    nombre
                    telefono
                }
                imagen {
                    localFile {
                        childImageSharp {
                            gatsbyImageData (width: 1200)
                        }
                    }
                }
            }
        }
    }
`;


const Propiedades = ({ data }) => {
    const resultado = data.allStrapiPropiedades.nodes
    const { agentes, descripcion, estacionamiento, habitaciones, imagen, nombre, precio, wc } = resultado[0];

    return (
        <>
            <Layout>
                <h1
                    css={css`
                        margin: 4rem;
                    `}
                >{nombre}</h1>
                <Contenido>
                    <main>
                        <GatsbyImage 
                            image={getImage(imagen.localFile.childImageSharp.gatsbyImageData)} 
                            layout="fixed"
                            alt="propiedad" 
                            // layout="fixed"
                            // width={20}
                            // height={20}
                        />
                        <p>{descripcion}</p>
                    </main>

                    <SideBar>
                        <p className="precio">$ {precio} </p>
                        <Iconos 
                            wc={wc}
                            estacionamiento={estacionamiento}
                            habitaciones={habitaciones}
                        />

                        <div className="agente">
                            <h2>Vendedor</h2>
                            <p>{agentes.nombre}</p>
                            <p>Tel: { agentes.telefono}</p>
                            <p>Email: {agentes.email}</p>
                        </div>
                    </SideBar>
                </Contenido>

            </Layout>
        </>
    );
}
 
export default Propiedades;








// import { GatsbyImage, getImage } from "gatsby-plugin-image";

// <GatsbyImage 
//                         image={getImage(imagen.localFile.childImageSharp.gatsbyImageData)} 
//                         layout="fixed"
//                         alt="propiedades" 
//                     />
/* <StaticImage
     src="../images/dino.png"
     alt="A dinosaur"
     placeholder="blurred"
     layout="fixed"
     width={200}
     height={200}
   /> */