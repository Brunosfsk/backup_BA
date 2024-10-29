import { Link, useParams } from 'react-router-dom';
import SheetCart from './SheetCart';
import { ThemeToggleMode } from '@/components/Theme/ThemeToggleMode';

function Navbar() {
  const { nameBussiness } = useParams();

  return (
    <nav className="flex justify-center z-50 h-16 w-full md:relative  px-4 2xl:px-16 py-4 bg-foreground dark:bg-muted border-b border-foreground dark:border-muted fixed bottom-0">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <Link to={`/${nameBussiness}`} className="h-full">
          <img src="/logoBA.png" className="h-full" alt="Logo Bairro Ativo" />
        </Link>
        <div className="flex gap-4 items-center">
          <SheetCart />
          <ThemeToggleMode />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
