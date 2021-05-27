import CartItem from '../CartItem/CartItem'
// Types
import { FC } from 'react';
import { CartItemType } from '../../App';
// Styles
import { Wrapper } from './Cart.styles'


type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void
}

const Cart: FC<Props> = ({ cartItems, addToCart, removeFromCart }) => (
  <Wrapper>
    <h2>Your Shopping Cart</h2>
    {cartItems.length === 0 ? <p>No items</p> : null}
    {cartItems.map(item => (
      <CartItem />
    ))}
  </Wrapper>
)

export default Cart