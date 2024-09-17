import SheetCart from './SheetCart';

function Header({ titleHeader, qtd }) {
  return (
    <div className="z-50 h-16 relative flex justify-between items-center px-4 2xl:px-16 py-4 text-white border-b border-mutad">
      <img src="/logoBA.png" className="h-full" alt="Logo Bairro Ativo" />
      <h2 className="text-2xl font-medium">{titleHeader}</h2>
      <SheetCart qtd={qtd} />
    </div>
  );
}

export default Header;
