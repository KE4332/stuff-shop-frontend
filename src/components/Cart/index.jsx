import styled from "styled-components";
import cartLogo from '../../assets/shoppingcart.png'
import { useContext, useState } from "react";
import { CartContext } from "../../utils/context";
import { useNavigate } from "react-router-dom";

const CartDiv = styled.div`
    position: fixed;
    height: 100%;
    top: 1%;
    right: 8px;
    background: aliceblue;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CartLogo = styled.img`
    height: 64px;
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
    left: -3.5em;
`

const SpanCartLength = styled.span`
    color: white;
    position: relative;
    top: -9.5%;
`

const ButtonCartEdit = styled.button`
    margin: 0px 2px 1em 2px;
`

const ArticleNameLink = styled.span`
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

function Cart() {

    const { cart, updateCart } = useContext(CartContext);
    const [isCartOpened, SetCartStatus] = useState(false);

    const navigate = useNavigate();

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

    function changeAmount(articleName, increment) {

        const articleInCart = cart.find((article) => article.name === articleName);
        const newAmount = articleInCart.amount + increment;

        if (newAmount >= 1) {
            updateCart(cart.map((article) => article.name === articleName ? {name: article.name, price: article.price, amount: newAmount} : article))
        }
    }

    function removeArticleFromCart(articleName) {
        updateCart(cart.filter((article) => article.name !== articleName));
    }

    return (

        <CartDiv style={isCartOpened? {width: '30em'} : null}>
            <CartLogo src={cartLogo} alt='Cart Logo'/>
            <ButtonCart style={isCartOpened? {left: '-18.5em'} : null} onClick={() => SetCartStatus(!isCartOpened)}>{isCartOpened? '>' : '<'}</ButtonCart>
            <SpanCartLength>{cartTotalArticles()}</SpanCartLength>
            {
                isCartOpened ? (
                    cart.length !== 0 ? (
                        <div>
                            <ul style={{width: '28em',border: '4px solid #c8c0a8'}}>
                                {cart.map(({id, name, price, amount}, index) =>
                                    <li key={index}>
                                        <p>
                                            <span style={{border: '2px solid black'}}>{amount}</span> x
                                            <ArticleNameLink onClick={() => navigate(`/articles/${id}`)}>{name}</ArticleNameLink> = {amount * price}€
                                        </p>
                                        <span>
                                            <ButtonCartEdit onClick={() => changeAmount(name, -1)}>-</ButtonCartEdit>
                                            <ButtonCartEdit onClick={() => changeAmount(name, 1)}>+</ButtonCartEdit>
                                            <ButtonCartEdit onClick={() => removeArticleFromCart(name)} style={{margin : '0px 2px 1em 3em'}}>🗑️</ButtonCartEdit>
                                        </span>
                                    </li>
                                )}
                            </ul>
                            <span>Total: {cartTotalPrice()}€</span>
                        </div>
                    ) : (
                        <span>{'Your cart is empty :('}</span>
                    )
                ) : null
            }
        </CartDiv>
    )
}

export default Cart;