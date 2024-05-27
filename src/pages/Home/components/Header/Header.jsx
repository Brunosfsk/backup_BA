import DrawerCart from './DrawerCart';

function Header({ titleHeader, qtd }) {
  return (
    <div className="z-50 h-16 relative flex justify-between items-center px-16 py-2 bg-mutad text-white">
      <img src="/logoBA.png" className='h-full' />
      <h2 className="text-2xl font-medium">{titleHeader}</h2>
      <DrawerCart qtd={qtd}/>
    </div>
  );
}

export default Header;
