import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';



const Formulario = styled.form`
    width: 100%;
    display: flex;
    border: 1px solid #e1e1e1;
    max-width: 1200px;
    margin: 2rem auto 0 auto;
`;

const Select = styled.select`
    flex: 1;
    padding: 1rem;
    appearance: none;
    border: none;
    font-family: 'Lato', sans-serif;
`;

const useFiltro = () => {

    const [categoria, guardarCategoria] = useState('');

    // Busqueda query
    const resultado = useStaticQuery(graphql`
        query MyQuery {
            allStrapiCategorias {
                nodes {
                    nombre
                    id
                }
            }
        }
    `);
    const categorias = resultado.allStrapiCategorias.nodes
    // console.log(categorias)

    const FiltroUI = () => (
        <Formulario>
            <Select
                onChange={ e => guardarCategoria(e.target.value) }
                value={ categoria }
                css={css`
                    width: 400px; 
                    text-align-last:center;
                `}
            >
                <option value="">-- Filtre segun su preferencia --</option>
                {
                    categorias.map(opcion => (
                        <option 
                            key={opcion.id} 
                            value={opcion.nombre}
                        >{opcion.nombre}</option>
                    ))

                }
            </Select>
        </Formulario>
    )

    return {
        categoria, 
        FiltroUI
    }

    
}
 
export default useFiltro;