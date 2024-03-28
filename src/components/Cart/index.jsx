import styled from "styled-components";
import cartLogo from '../../assets/shoppingcart.png'
import { useContext } from "react";
import { CartContext } from "../../utils/context";

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

const SpanCartLength = styled.span`
    color: white;
    position: relative;
    top: -9.5%;
    right: -45%;
`

function Cart() {

    const { cart } = useContext(CartContext);

    function cartTotalArticles() {

        const totalArticles = cart.reduce(
            (acc, currentArticle) => acc + currentArticle.amount,
            0,
        );

        return totalArticles;
    }

    function cartTotalPrice() {
        const totalPrice = cart.reduce(
            (acc, currentArticle) => acc + currentArticle.amount * currentArticle.price,
            0,
        );

        return totalPrice;
    }

    return (
        <CartDiv>
            <CartLogo src={cartLogo} alt='Cart Logo'/>
            <ButtonCart>{'<'}</ButtonCart>
            <SpanCartLength>{cartTotalArticles()}</SpanCartLength>
        </CartDiv>
    )
}

export default Cart;