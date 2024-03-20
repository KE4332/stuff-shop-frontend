import styled from "styled-components"
import { articleList } from "../../Data/articles"
import { Navigate, useNavigate } from "react-router-dom"

const ArticleList = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

const WidthArticleItem = 240
const HeightArticleItem = 340

const ArticleItem = styled.div`
    height: ${HeightArticleItem}px;
    width: ${WidthArticleItem}px;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    margin-right: 40px;
    background:#dfdfdf;

    &:hover {
        cursor: pointer;
    }

    &:hover .articleName {
        text-decoration: underline;
    }
`

const CoverArticle = styled.img`
    height: ${WidthArticleItem}px;
    width: ${WidthArticleItem}px;
    object-fit: cover;
`

const ArticleItemText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: ${HeightArticleItem-WidthArticleItem}px;
`

const SpanArticle = styled.span`
    margin: 10px;
`


function Articles() {

    let navigate = useNavigate()

    return (
        <ArticleList>
            {articleList.map(({id, name, price, images}) =>
                <ArticleItem key={id} onClick={() => navigate(`/articles/${id}`)}>
                    <CoverArticle src={images[0]} alt="cover"/>
                    <ArticleItemText>
                        <SpanArticle className="articleName">{name}</SpanArticle>
                        <SpanArticle style={{color: 'red'}}>{price} €</SpanArticle>
                    </ArticleItemText>
                </ArticleItem>
            )}
        </ArticleList>
    )
}

export default Articles