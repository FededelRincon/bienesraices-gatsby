import { graphql, useStaticQuery } from 'gatsby';

const usePropiedades = () => {

    const resultado = useStaticQuery(graphql`
    {
        allStrapiPropiedades {
            nodes {
                nombre
                descripcion
                id
                wc
                precio
                estacionamiento
                habitaciones
                categoria {
                    nombre
                }
                agentes {
                    nombre
                    telefono
                    email
                }
                imagen {
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    }
    `);

    // console.log(resultado)

    return resultado.allStrapiPropiedades.nodes.map ( propiedad => ({
        agentes: propiedad.agentes,
        categoria: propiedad.categoria,
        descripcion: propiedad.descripcion,
        estacionamiento: propiedad.estacionamiento,
        habitaciones: propiedad.habitaciones,
        id: propiedad.id,
        imagen: propiedad.imagen,
        nombre: propiedad.nombre,
        precio: propiedad.precio,
        wc: propiedad.wc,
    }));
    
}
 
export default usePropiedades;