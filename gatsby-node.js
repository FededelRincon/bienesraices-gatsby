const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {

    const resultado = await graphql(`
        query {
            allStrapiPropiedades {
                nodes {
                    id
                    nombre
                }
            }

            allStrapiPaginas {
                nodes {
                    id
                    nombre
                }
            }

              
        }
    `);

    // console.log(JSON.stringify(resultado))
    // console.log(JSON.stringify(resultado.data.allStrapiPropiedades))

    // Si no hay resultados
    if(resultado.errors){
        reporter.panic('No hubo resultado ', resultado.errors);
    }

    // Si hay resultados, generar los archivos estaticos
    const propiedades = resultado.data.allStrapiPropiedades.nodes;
    const paginas = resultado.data.allStrapiPaginas.nodes


    // Crear los templates de propiedades
    propiedades.forEach( propiedad => {
        // urlSlug( propiedad.nombre )

        actions.createPage({
            path: urlSlug( propiedad.nombre ),
            component: require.resolve('./src/components/Propiedades.js'),
            context: {
                id: propiedad.id
            }
        })
    });
    
    
    // Crear los templates de paginas
    paginas.forEach( pagina => {
        actions.createPage({
            path: urlSlug( pagina.nombre ),
            component: require.resolve('./src/components/Paginas.js'),
            context: {
                id: pagina.id
            }
        })
    });
}






