import styled from "styled-components"

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

const LeftButton = styled.button`
    position: absolute;
    left: 2%;
`

const RightButton = styled.button`
    position: absolute;
    right: 64%;
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

    &:hover {
        cursor: pointer;
    }
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

    const [currentIndex, setIndex] = useState(0)

    return (
        <ArticleContainer>
            <ImageViewer>
                <ImgWrapper>
                    {
                        currentIndex !== 0 ? (
                            <LeftButton onClick={() => setIndex(currentIndex-1)}>{'<-'}</LeftButton>
                        ) : null
                    }

                    <ImgInView src={article.images[currentIndex]} alt='Image in View'/>
                    {
                        currentIndex !== article.images.length - 1 ? (
                            <RightButton onClick={() => setIndex(currentIndex+1)}>{'->'}</RightButton>
                        ) : null
                    }
                </ImgWrapper>
                <ImageSelector>
                    {
                        article.images.map((image, index) => (
                            <ImgThumbail key={`${image}-${index}`} src={image} alt='thumbail'
                            style={currentIndex === index ? {border: '3px solid black'} : null}
                            onClick={() => {setIndex(index)}} />
                        ))
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