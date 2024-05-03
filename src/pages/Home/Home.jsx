import React from 'react';
import CardVitrine from '../../components/CardVitrine';
import Footer from '../../components/Footer';
import { produtos } from '../../dados';
import Header from '../../components/Header';
import DrawerCart from '../../components/DrawerCart/DrawerCart';

const Home = () => {
  return (
    <div>
      <Header showMenu={true} titleHeader="Seja Bem-Vindo" />
      <h2 className="text-2xl mt-12 text-center">
        Faça sua escolha e adicione no seu carrinho de compras
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {produtos.map((prod) => (
          <CardVitrine
            key={prod.id}
            id={prod.id}
            nome={prod.nome}
            descricao={prod.descricao}
            preco={prod.preco}
            foto={prod.foto}
          />
        ))}
      </div>
      <Footer />
      {/* <DrawerCart /> */}
    </div>
  );
};

export default Home;
