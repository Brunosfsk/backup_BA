import React from "react";
import CardVitrine from '../../Components/Card_Vitrine';
import Header from "../../Components/Header/Header";
import * as Styled from './style'
import { produtos } from "../../dados";
import Footer from "../../Components/Footer";


function Home() {

    return (
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      )

    // return (
    //     <div>
    //         <Header showMenu={true} titleHeader="Seja Bem-Vindo" />
    //         <Styled.Chamada>Faça sua escolha e adicione no seu carrinho de compras</Styled.Chamada>
    //         <Styled.ContainerVitrine>
    //             {
    //                 produtos.map((prod) => {
    //                     return <CardVitrine key={prod.id}
    //                         id={prod.id}
    //                         nome={prod.nome}
    //                         descricao={prod.descricao}
    //                         preco={prod.preco}
    //                         foto={prod.foto}
    //                     />
    //                 })

    //             }



    //             {/* <ModalCart inOpen={openModal}/> */}
    //         </Styled.ContainerVitrine>

    //         <Footer />
    //     </div>
    // )
}

export default Home;