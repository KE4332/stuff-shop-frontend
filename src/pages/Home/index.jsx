import styled from 'styled-components';

import Shops from '../Shops';
import Articles from '../Articles';

const HomeSectionTitle = styled.h1`
    border-bottom: 2px solid black;
`

function Home() {
    return (
        <div>
            <HomeSectionTitle>Magasins</HomeSectionTitle>
            <Shops />
            <HomeSectionTitle>Derniers Articles</HomeSectionTitle>
            <Articles />
        </div>
    )
}

export default Home;
