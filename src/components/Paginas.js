import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from './Layout';
import { graphql } from 'gatsby';
import ListadoPropiedades from './ListadoPropiedades';
import { css } from '@emotion/react';



const ContenidoPagina = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr; //66% y 33%
        column-gap: 5rem;
    }
`;



export const query = graphql`
    query ($id: String!) {
        allStrapiPaginas(filter: {id: {eq: $id}}) {
            nodes {
                nombre
                contenido
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
    // console.log(data)
    const resultado = data.allStrapiPaginas.nodes
    const { nombre, contenido, imagen } = resultado[0];
    // console.log(nombre)
    // console.log(contenido)
    // console.log(imagen)

    return (
        <>
            <Layout>
                <main className="contenedor">
            
                    <h1
                        css={css`
                            margin: 4rem;
                        `}
                    >{nombre}</h1>
                    
                    <ContenidoPagina>
                        <GatsbyImage 
                            image={getImage(imagen.localFile.childImageSharp.gatsbyImageData)} 
                            // layout="fixed"
                            alt="propiedad" 
                            layout="fluid"
                            // width={20}
                            // height={20}
                            />

                        <p
                            css={css`
                                text-align: justify;
                            `}
                        >{contenido}</p>

                    </ContenidoPagina>

                </main>

                {
                    nombre === "Propiedades" && (<ListadoPropiedades />)
                }

            </Layout>
        </>
    );
}
 
export default Propiedades;
