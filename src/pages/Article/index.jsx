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
    margin: 30px;
    display: flex;
    flex-direction: row;
`

//function Article({category, name, description, price, cover}: ArticleProps) {
function Article() {
    const { id } = useParams()
    const idNumber = parseInt (id)

    const article = articleList.find((article) => {return article.id === idNumber});

    return (
        <ArticleContainer>
            <div>
                { article?.cover ? (
                    <img style={{height: '15em', padding: '2em'}} src={article.cover} alt='cover'/>
                    ) : (
                    <img style={{height: '15em', padding: '2em'}} src={default_cover} alt='default_cover'/>
                    )
                }
            </div>
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