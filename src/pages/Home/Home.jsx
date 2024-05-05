
import { produtos } from '../../dados';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header/Header';

const Home = () => {
  return (
    <div>
      <Header titleHeader="Seja Bem-Vindo" />
      <h2 className="text-2xl mt-12 text-center">
        Faça sua escolha e adicione no seu carrinho de compras
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {produtos.map((prod) => (
          <Body
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
    </div>
  );
};

export default Home;
