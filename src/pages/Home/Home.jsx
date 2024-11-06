import { useContext, useState } from 'react';
import Footer from '../../components/Footer';
import Body from './components/Body/Body';
import Navbar from './components/Navbar/Navbar';
import { CartHomeContext } from '@/contexts/cartHome';

const Home = () => {
  const { removeAllItems } = useContext(CartHomeContext);
  
  useState(() => {
    removeAllItems()
  }, []);
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
