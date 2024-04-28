import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider(props) {

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('@Service:cart')) || []);
    const [totalCart, setTotalCart] = useState(localStorage.getItem('@Service:cartTotal') || 0);
    // const [dadosEntrega, setDadosEntrega] = useState([]);

    // function AddDadosEntrega(item){
    //     let dadosNovo = [];
    //         dadosNovo.push(item);
    //         console.log(dadosNovo)
    // }

    function AddItemCart(item) {

        let cartItemsNovo = [];
        let findItem = false;

        for (var prod of cartItems) {
            if (prod.id == item.id) {
                item.qtd = prod.qtd + 1;
                findItem = true;
                cartItemsNovo.push(item);
            } else {
                cartItemsNovo.push(prod);
            }
        }

        if ((findItem == false) || (cartItems.length == 0)) {
            cartItemsNovo.push(item)
        }

        localStorage.setItem('@Service:cart', JSON.stringify(cartItemsNovo))
        setCartItems(cartItemsNovo)
        CalcTotal(cartItemsNovo)
    }

    function RemoveItemCart(id) {
        let cartItemsNovo = [];

        for (var prod of cartItems) {
            if (prod.id == id) {
                prod.qtd = prod.qtd - 1;
            }
            cartItemsNovo.push(prod);
        }

        cartItemsNovo = cartItemsNovo.filter((item) => {
            return item.qtd > 0
        })

        localStorage.setItem('@Service:cart', JSON.stringify(cartItemsNovo))
        setCartItems(cartItemsNovo)
        CalcTotal(cartItemsNovo)
    }

    function CalcTotal(items) {
        let tot = 0;
        for (var item of items)
            tot = tot + (item.preco * item.qtd);

        localStorage.setItem('@Service:cartTotal', tot)
        setTotalCart(tot);
    }

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, AddItemCart, totalCart, RemoveItemCart }}>
            {props.children}
        </CartContext.Provider>
    )

}

export { CartContext, CartProvider }

// Criar o armazenamento de dados no localstorage do pedido