import styled from "styled-components";
import cartLogo from '../../assets/shoppingcart.png'

const CartDiv = styled.div`
    position: fixed;
    height: 100%;
    top: 1%;
    right: 8px;
    background: aliceblue;
    padding: 10px;
    display: flex;
    flex-direction: column;
`

const CartLogo = styled.img`
    height: 4em;
    width: auto;
    background-color: rgba(0,0,0,0.1);
    border: 1px solid rgba(0,0,1,1);
    border-radius: 50%;
`

const ButtonCart = styled.button`
    border: 2px solid black;
    border-radius: 50%;
    width: min-content;
    position: relative;
    top: -3em;
    left: -1.5em;
`

function Cart() {
    return (
        <CartDiv>
            <CartLogo src={cartLogo} alt='Cart Logo'/>
            <ButtonCart>{'<'}</ButtonCart>
        </CartDiv>
    )
}

export default Cart;