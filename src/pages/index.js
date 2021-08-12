import React from 'react';
import Layout from '../components/Layout';
import Encuentra from '../components/Encuentra';
import ListadoPropiedades from '../components/ListadoPropiedades';

import useInicio from '../hooks/useInicio';
import BackGroundImage from 'gatsby-background-image';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as heroCSS from '../css/hero.module.css';

const ImagenBackground = styled(BackGroundImage)`
    height: 600px;
`;

const Index = () => {
    const inicio = useInicio();
    const { contenido, imagen } = inicio[0];
    // const { nombre, contenido, imagen } = inicio[0];

    return (
        <>
            <Layout>
                <ImagenBackground
                    tag="section"
                    fluid={imagen.localFile.sharp.fluid}
                    fadeIn="soft"
                >
                    <div className={heroCSS.imagenbg}
                    >
                        <h1
                            className={heroCSS.titulo}
                        > Venta de casas y departamentos </h1>
                    </div>
                </ImagenBackground>

                <main>
                    <div
                        css={css`
                            max-width: 800px;
                            margin: 2rem auto;
                            `}
                    >
                        {/* <h1>{nombre}</h1> */}
                        <h1> Vendemos su propiedad en promedio de 90 dias </h1>
                        <p css={css`
                            text-align: center;
                            `}> { contenido } </p>

                    </div>
                </main>

                <Encuentra />

                <ListadoPropiedades />
                
            </Layout>
        </>
    );
}
 
export default Index;