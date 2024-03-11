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

const ImageViewer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 2%;
`

const ImgWrapper = styled.div`
    height: 500px;
    width: 500px;
    background-color: #dadada;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2px;
`

const ImgInView = styled.img`
    max-height: 490px;
    max-width: 490px;
`

const ImageSelector = styled.div`
    background-color: pink;
    width: 500px;
    height: 57px;
`

const ListImage = styled.div`
    display: flex;

`

const ArticleTitle = styled.h2`
    font-size: 30px;
    text-transform: capitalize;
`

const ArticleDescription = styled.p`
    background-color: #f2f2f2;
    padding: 16px;
`

//function Article({category, name, description, price, cover}: ArticleProps) {
function Article() {
    const { id } = useParams()
    const idNumber = parseInt(id)

    const article = articleList.find((article) => {return article.id === idNumber});

    return (
        <ArticleContainer>
            <ImageViewer>
                <ImgWrapper>
                    { article?.images ? (
                        <ImgInView src={article.images[0]} alt='cover'/>
                        ) : (
                        <ImgInView src={default_cover} alt='default_cover'/>
                        )
                    }
                </ImgWrapper>
                <ImageSelector>
                    <ListImage></ListImage>
                </ImageSelector>
            </ImageViewer>

            <div style={{width: '600px'}}>
                <div style={{ borderBottom: '2px black solid', paddingBottom:'20px' }}>
                    <ArticleTitle>{article?.name}</ArticleTitle>
                    <p><span style={{fontWeight: "bold"}}>Category:</span> {article?.category}</p>
                </div>
                <h3>{article?.price} €</h3>
                <ArticleDescription>{article?.description}</ArticleDescription>
            </div>
        </ArticleContainer>
    )
}

export default Article