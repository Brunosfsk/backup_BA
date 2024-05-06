import DrawerCart from './DrawerCart';

function Header({ titleHeader }) {
  return (
    <div className="z-50 h-16 relative flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
      <img src="/logoBA.png" className='h-full' />
      <h2 className="text-2xl font-medium">{titleHeader}</h2>
      <DrawerCart />
    </div>
  );
}

export default Header;
