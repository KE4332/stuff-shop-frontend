import styled from "styled-components"
import { articleList } from "../../Data/articles"

const ArticleList = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

const ArticleItem = styled.div`
    height: 240px;
    width: 240px;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    margin-right: 40px;
`

const CoverArticle = styled.img`
    height: inherit;
    width: inherit;
`

function Articles() {
    return (
        <ArticleList>
            {articleList.map(({id, category, name, description, price, images}) =>
                <ArticleItem key={id}>
                    <CoverArticle src={images[0]} alt="cover"/>
                    <span>{name}</span>
                    <span>{price}</span>
                </ArticleItem>
            )}
        </ArticleList>
    )
}

export default Articles