import styled from "styled-components"

import default_cover from '../../assets/default-stuff-cover.jpg'
import { useParams } from "react-router-dom"
import { articleList } from "../../Data/articles"

// interface ArticleProps {
//     category: string,
//     name: string,
//     description: string,
//     price: number,
//     cover?: string,
// }

const ArticleContainer = styled.div`
    margin: 2%;
    display: flex;
    flex-direction: row;
`

const ImgWrapper = styled.div`
    height: 500px;
    width: 500px;
    background-color: #dadada;
    margin-right: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CenteredImg = styled.img`
    max-height: 490px;
    max-width: 490px;
`
//function Article({category, name, description, price, cover}: ArticleProps) {
function Article() {
    const { id } = useParams()
    const idNumber = parseInt(id)

    const article = articleList.find((article) => {return article.id === idNumber});

    return (
        <ArticleContainer>
            <ImgWrapper>
                { article?.cover ? (
                    <CenteredImg src={article.cover} alt='cover'/>
                    ) : (
                    <CenteredImg src={default_cover} alt='default_cover'/>
                    )
                }
            </ImgWrapper>
            <div>
                <h2>{article?.name}</h2>
                <span style={{ borderBottom: '2px black solid' }}>Category: {article?.category}</span>
                <h2>{article?.price} €</h2>
                <p>{article?.description}</p>
            </div>
        </ArticleContainer>
    )
}

export default Article