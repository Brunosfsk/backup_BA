import { Link, useParams } from 'react-router-dom';
import SheetCart from './SheetCart';

function Navbar() {
  const { nameBussiness } = useParams();

  return (
    <nav className="z-50 h-16 w-full md:relative flex justify-between items-center px-4 2xl:px-16 py-4 text-white bg-foreground border-b border-mutad fixed bottom-0">
      <Link to={`/${nameBussiness}`} className="h-full">
        <img src="/logoBA.png" className="h-full" alt="Logo Bairro Ativo" />
      </Link>
      <SheetCart />
    </nav>
  );
}

export default Navbar;
