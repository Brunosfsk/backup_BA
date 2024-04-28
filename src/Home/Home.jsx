import React from 'react';
import CardVitrine from '../components/CardVitrine'
// import Header from './Header';
// import Footer from './Footer';
import { produtos } from "../dados";

const Home = () => {
    return (
        <div>
            {/* <Header showMenu={true} titleHeader="Seja Bem-Vindo" /> */}
            <h2 className="text-2xl mt-12 text-center">Faça sua escolha e adicione no seu carrinho de compras</h2>
            <div className="flex flex-wrap justify-center">
                {produtos.map((prod) => (
                    <CardVitrine key={prod.id}
                        id={prod.id}
                        nome={prod.nome}
                        descricao={prod.descricao}
                        preco={prod.preco}
                        foto={prod.foto}
                    />
                ))}
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Home;