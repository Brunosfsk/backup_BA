import Body from './components/Body/Body';
import Footer from './components/Footer';
import Header from './components/Header/Header';

const Home = () => {
  return (
    <div className="h-dvh flex flex-col justify-between ">
      <div>
        <Header titleHeader="Seja Bem-Vindo" />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
