import React from 'react';
import { Link } from 'gatsby';
import Navegacion from './Navegacion';
import { css } from '@emotion/react';
import { StaticImage } from "gatsby-plugin-image";


const Header = () => {

    // //consultar el logo.svg
    // const { logo } = useStaticQuery(graphql`
    //     query {
    //         logo: file(relativePath: {eq: "logo.svg"}) {
    //             publicURL
    //         }
    //     }
      
    // `);
    // // console.log(logo);

    return (
        <>
            <header
                css={css`
                    background-color: #035397;
                    /* padding: .5rem; */
                `}
            >
                <div
                    css={css`
                    //css de 768 hacia mas pequeño
                        max-width: 120rem;
                        margin: 0 auto;
                        text-align: center;
                        
                        //css de 768 hacia mas grande
                        @media (min-width: 768px) {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding: 1.5rem;
                            padding-top: 1.5rem;
                        }
                    `}
                >
                    <Link to="/">
                        {/* <img src={logo.publicURL} alt="Logotipo bienes raices" /> */}
                        <StaticImage 
                            src="../images/logo.svg" 
                            alt="Logotipo bienes raices" 
                            fadein="soft"
                            layout="fixed"
                            width={400}
                            height={150}
                        />
                    </Link>

                    <Navegacion />
                </div>
            </header>
        </>
    );
}
 
export default Header;