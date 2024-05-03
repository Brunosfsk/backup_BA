import React, { useState } from 'react';
import ButtonCart from '../components/Buttons/ButtonCart';
import ModalCart from '../components/ModalCart/ModalCart';
import DrawerCart from './DrawerCart/DrawerCart';

function Header(props) {
  const [openModal, setOpenModal] = useState(false);

  function ok() {
    console.log("ok foi");
  }

  return (
    <div className="grid-column-start: 2 !important; z-[100] relative flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
      <svg className="w-8 h-8 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3 10h14v1H3zM7 14h6v1H7zM7 6h6v1H7z"/></svg>
      <h2>{props.titleHeader}</h2>
      {props.showMenu && (
        <div>
          {/* <button className="bg-white text-gray-800 py-2 px-4 rounded-lg" onClick={() => setOpenModal(true)}>SACOLA</button> */}
          {/* <ButtonCart text={"Sacola"}></ButtonCart> */}
          {/* <ModalCart inOpen={openModal} setOpenModal={setOpenModal}/> */}
        </div>
      )}
      <DrawerCart />
    </div>
  );
}

export default Header;