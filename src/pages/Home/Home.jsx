import Footer from '../../components/Footer';
import Body from './components/Body/Body';
import Navbar from './components/Navbar/Navbar';

const Home = () => {
  return (
    <div className="h-dvh flex flex-col justify-between bg-background">
      <div>
        <Navbar />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
