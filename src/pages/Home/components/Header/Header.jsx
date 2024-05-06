import DrawerCart from './DrawerCart';

function Header({ titleHeader }) {
  return (
    <div className="z-50 h-14 relative flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
      <svg
        className="w-8 h-8 fill-current text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M3 10h14v1H3zM7 14h6v1H7zM7 6h6v1H7z" />
      </svg>
      <h2>{titleHeader}</h2>
      <DrawerCart />
    </div>
  );
}

export default Header;
