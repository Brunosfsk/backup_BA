import Footer from '../../components/Footer';
import Body from './components/Body/Body';
import HeaderCatalog from './components/Header/HeaderCatalog';
import Navbar from './components/Navbar/Navbar';

const Catalog = () => {
  return (
    <div className="h-full flex flex-col justify-between bg-white">
        <Navbar />
        <HeaderCatalog />
        <Body />
      {/* <Footer /> */}
    </div>
  );
};

export default Catalog;
