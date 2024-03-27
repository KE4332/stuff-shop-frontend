import { useParams } from "react-router-dom";
import { shopsList } from "../../Data/shops";
import styled from "styled-components";

import defaultShopLogo from '../../assets/shopLogo.png'

const ShopDiv = styled.div`
    display: flex;
    border: 5px solid black;
    border-radius: 1%;
    background-color: #c4eeff;
    margin-top: 40px;
`

const ShopCover = styled.img`
    height: 500px;
    width: 500px;
    object-fit: cover;
    margin-right: 10px;
`

const ShopInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

const SpanInfo = styled.span`
    margin: 5px;
`

const SpanInfoTitle = styled.span`
    font-weight: bold;
`

const OpeningHoursDiv = styled.div`
    display: flex;
    justify-content: space-around;
`

const ColumnContent = styled.div`
    display: flex;
    flex-direction: column;
`

function stringOpeningHours(dayOpeningHours) {

    const hourOpen = dayOpeningHours[0][0];
    const hourClose = dayOpeningHours[1][0];
    const minuteOpen = dayOpeningHours[0][1] !== 0 ? dayOpeningHours[0][1] : '';
    const minuteClose = dayOpeningHours[1][1] !== 0 ? dayOpeningHours[1][1] : '';

    return `${hourOpen}h${minuteOpen} - ${hourClose}h${minuteClose}`;
}

function Shop() {
    const { id } = useParams()
    const idNumber = parseInt(id)

    const shop = shopsList.find((shop) => {return shop.id === idNumber});

    return (
        <ShopDiv>
            <ShopCover src={shop.cover ? shop.cover : defaultShopLogo} alt='shop cover'/>
            <ShopInfoDiv>
                <SpanInfo>{shop.name}</SpanInfo>
                <SpanInfo><SpanInfoTitle>Adress: </SpanInfoTitle>{shop.name}</SpanInfo>
                <SpanInfo><SpanInfoTitle>Telephone: </SpanInfoTitle>{shop.telephone}</SpanInfo>
                {shop.email ? (
                        <SpanInfo><SpanInfoTitle>Email: </SpanInfoTitle>{shop.email}</SpanInfo>
                    ) : null
                }
                {shop.website ? (
                        <SpanInfo><SpanInfoTitle>Website: </SpanInfoTitle>{shop.website}</SpanInfo>
                    ) : null
                }
                <SpanInfo><SpanInfoTitle>Opening Hours:</SpanInfoTitle></SpanInfo>
                <OpeningHoursDiv>
                    <ColumnContent>
                    {
                        ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) =>
                            <span>{day}</span>
                        )
                    }
                    </ColumnContent>
                    <ColumnContent>
                    {
                        shop.openingHours.map((dayOpeningHours, index) =>

                            dayOpeningHours ? (
                                <span key={index}>{stringOpeningHours(dayOpeningHours, index)}</span>
                            ) : <span key={index}>Closed</span>

                        )
                    }
                    </ColumnContent>
                </OpeningHoursDiv>
            </ShopInfoDiv>
        </ShopDiv>
    )
}

export default Shop;