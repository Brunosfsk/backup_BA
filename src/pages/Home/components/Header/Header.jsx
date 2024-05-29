import DrawerCart from './DrawerCart';

function Header({ titleHeader, qtd }) {
  return (
<<<<<<< HEAD
    <div className="z-50 h-16 relative flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
      <img src="/logoBA.png" className="h-full" alt="Logo Bairro Ativo" />
=======
    <div className="z-50 h-16 relative flex justify-between items-center px-16 py-2 bg-mutad text-white">
      <img src="/logoBA.png" className='h-full' />
>>>>>>> origin/ajustesFront
      <h2 className="text-2xl font-medium">{titleHeader}</h2>
      <DrawerCart qtd={qtd}/>
    </div>
  );
}

export default Header;
