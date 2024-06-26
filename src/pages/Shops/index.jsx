import styled from 'styled-components'
import defaultShopLogo from '../../assets/shopLogo.png'
import { shopsList } from '../../Data/shops'
import { useNavigate } from 'react-router-dom';

const ShopList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const WidthShopCard = 340;
const HeightShopCard = 460;

const ShopCard = styled.div`
    height: ${HeightShopCard}px;
    width: ${WidthShopCard}px;
    display: flex;
    flex-direction: column;
    border: 4px solid orange;
    margin: 40px;

    &:hover {
        cursor: pointer;
        border-style: double;
    }

    &:hover .shopName {
        text-decoration: underline;
    }
`

const CoverShop = styled.img`
    height: ${WidthShopCard}px;
    width: ${WidthShopCard}px;
    object-fit: cover;
`

const ShopCardText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const SpanShopCard = styled.span`
    margin: 10px;
`

function currentlyOpenString(openingHours) {
    const currentDate = new Date();

    //index day of the week, 0 = monday, 1 = tuesday, etc
    const indexDayToday = (6 + currentDate.getDay()) % 7;
    const h = currentDate.getHours();
    const m = currentDate.getMinutes();

    if (openingHours[indexDayToday] == null || h > openingHours[indexDayToday][1][0] ||
        h ===  openingHours[indexDayToday][1][0] & m >= openingHours[indexDayToday][1][1]) {

            const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            let nextDayIndex = (indexDayToday+1) % 7
            while (weekDays[nextDayIndex] == null) {
                nextDayIndex += 1;
            }

            const nextDayString = weekDays[nextDayIndex];
            const nextOpeningHour = openingHours[nextDayIndex][0]

            return <SpanShopCard style={{color: 'red'}}>{`Closed, open ${nextDayString}
            at ${nextOpeningHour[0]}h${nextOpeningHour[1] ? nextOpeningHour[1] : ''}`}</SpanShopCard>;
    }

    else {
        const minuteClose = openingHours[indexDayToday][1][1];

        return <SpanShopCard style={{color: 'green'}}>{`Opened, close
        at ${openingHours[indexDayToday][1][0]}h${minuteClose ? minuteClose : ''}`}</SpanShopCard>
    }

}

function Shops() {

    const navigate = useNavigate()

    return (
        <ShopList>
            {shopsList.map(({id, name, adress, cover, openingHours }) =>
                <ShopCard key={id} onClick={() => navigate(`/shops/${id}`)}>
                    <CoverShop src={cover ? cover : defaultShopLogo} alt='cover'/>
                    <ShopCardText>
                        <SpanShopCard className="shopName">{name}</SpanShopCard>
                        <SpanShopCard style={{fontWeight: 'bold'}}>{adress}</SpanShopCard>
                        {currentlyOpenString(openingHours)}
                    </ShopCardText>
                </ShopCard>
            )}
        </ShopList>
    )
}

export default Shops