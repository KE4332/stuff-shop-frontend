import styled from "styled-components"

import default_cover from '../../assets/default-stuff-cover.jpg'
import { useParams } from "react-router-dom"
import { articleList } from "../../Data/articles"
import { useState } from "react"

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
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ImgThumbail = styled.img`
    height: 50px;
`

const ArticleTitle = styled.h2`
    font-size: 30px;
    text-transform: capitalize;
`

const ArticleDescription = styled.p`
    background-color: #f2f2f2;
    padding: 16px;
`

function Article() {
    const { id } = useParams()
    const idNumber = parseInt(id)

    const article = articleList.find((article) => {return article.id === idNumber});


    const [currentImageInView, setImageInView] = useState(article.images ? article.images[0] : default_cover)

    return (
        <ArticleContainer>
            <ImageViewer>
                <ImgWrapper>
                        <ImgInView src={currentImageInView} alt='Image in View'/>
                </ImgWrapper>
                <ImageSelector>
                    { article.images ? (
                        article.images.map((image, index) => (
                            <ImgThumbail key={`${image}-${index}`} src={image} alt='thumbail'
                            onClick={() => setImageInView(article.images[index])} />
                        ))
                        ) : null
                    }
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