import { useContext } from 'react';
import { CartContext } from '../../../../../contexts/contextCart';


function ProductCart(props) {
  const { AddItemCart, RemoveItemCart } = useContext(CartContext);

  function AddItem() {
    const item = {
      id: props.id,
      nome: props.nome,
      preco: props.preco,
      foto: props.foto,
      qtd: 1,
    };
    AddItemCart(item);
  }

  function RemoveItem() {
    RemoveItemCart(props.id);
  }

  const totalItem = props.preco * props.qtd;

  return (
    <div className="p-4 border rounded-lg flex justify-between items-center">
      {props.showBtn ? (
        <div className="flex items-center">
          <img
            src={props.foto}
            alt={props.nome}
            className="w-16 h-16 object-cover mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">{props.nome}</h3>
            <p className="text-gray-500">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(props.preco)}
            </p>
            <div className="flex items-center mt-2">
              <button
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md mr-2"
                onClick={RemoveItem}
              >
                -
              </button>
              <p>{props.qtd}</p>
              <button
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md ml-2"
                onClick={AddItem}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <p className="mr-4">{props.qtd}</p>
          <img
            src={props.foto}
            alt={props.nome}
            className="w-16 h-16 object-cover mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">{props.nome}</h3>
            <p className="text-gray-500">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(totalItem)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCart;
