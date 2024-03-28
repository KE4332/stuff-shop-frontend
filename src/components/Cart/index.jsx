import styled from "styled-components";
import cartLogo from '../../assets/shoppingcart.png'

const CartDiv = styled.div`
    position: absolute;
    top: 15%;
    right: 1%;
    background: aliceblue;
    height: 100%;
    padding: 10px;
`

const CartLogo = styled.img`
    height: 2em;
    width: auto;
    background-color: rgba(0,0,0,0.1);
    border: 1px solid rgba(0,0,1,1);
    border-radius: 50%;
    padding: 1em;
`

function Cart() {
    return (
        <CartDiv>
            <CartLogo src={cartLogo} alt='Cart Logo'/>
        </CartDiv>
    )
}

export default Cart;