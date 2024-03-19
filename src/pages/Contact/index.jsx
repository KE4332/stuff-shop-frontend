import styled from "styled-components"

const ContactBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    border: 3px solid black;
    border-radius: 3em;
    margin: 2em 10em 10em 10em;
    padding: 1em;
    background: linear-gradient(#8360c3, #2ebf91);
`

const TitleContactBox = styled.h2`
    border: 4px solid black;
    border-radius: 4em;
    background-color: white;
    position: absolute;
    top: 13%;
    left: 28%;
    padding: 18px;
    font-size: 2em;

`

function Contact() {
    return (
        <div>
            <TitleContactBox>Nous contacter</TitleContactBox>
            <ContactBox>
                <span>☎️06 06 06 06 06</span>
                <span>📧contact@stuff-shop.com</span>
                <span>🏠1 Avenue de France 75000 Paris</span>
            </ContactBox>
        </div>

    )
}

export default Contact