import styled from "styled-components"

import { useParams } from "react-router-dom"
import { articleList } from "../../Data/articles"
import { useState } from "react"

import closeBtn from "../../assets/closeBtn.png"
// import { Image, ImageGroup } from "react-fullscreen-image"

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

const ArrowButton = styled.button`
    position: absolute;
    height: 8%;
`

const LeftButton = styled(ArrowButton)`
    left: 2%;
`

const RightButton = styled(ArrowButton)`
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
    border-radius: 10px;
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

const FullScreenImg = styled.img`
    width: '100%';
    height: '100%';
    position: absolute;
    top: 50%;
    left: 50%;
`

const CloseBtn = styled.img`
    height: 10%;
    position: absolute;
    top: 1%;
    right:1%
`

function Article() {
    const { id } = useParams()
    const idNumber = parseInt(id)

    const article = articleList.find((article) => {return article.id === idNumber});

    const [currentIndex, setIndex] = useState(0)

    const [fullScreenImage, setFullscreenImage] = useState(null);
    /*const goFullscren = event => {
        event.currentTarget.fullScreen(true);
    }*/
    const nb_images = article.images.length

    return (
        <ArticleContainer>
            <ImageViewer>
                <ImgWrapper>
                    {
                        <LeftButton onClick={() => setIndex((currentIndex + nb_images - 1) % nb_images)}>{'<-'}</LeftButton>
                    }

                    <ImgInView src={article.images[currentIndex]} alt='Image in View'/>
                    {
                        <RightButton onClick={() => setIndex((currentIndex+1) % nb_images)}>{'->'}</RightButton>
                    }
                </ImgWrapper>
                <ImageSelector>
                    {
                        article.images.map((image, index) => (
                            <ImgThumbail key={`${image}-${index}`} src={image} alt='thumbail'
                            style={currentIndex === index ? {border: '3px solid black'} : null}
                            onMouseEnter={() => {setIndex(index)}}
                            // onClick={() => {setFullscreenImage(); console.log(image); console.log(fullScreenImage)}}
                            onClick={(event) => {
                                let file = event.target.src
                                console.log(file)
                                console.log(image)
                                setFullscreenImage(file)
                                console.log(fullScreenImage)
                                }
                            }
                            />
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

            {fullScreenImage ? (
                <div>
                    <FullScreenImg src={fullScreenImage} alt="fullScreenImage"/>
                    <CloseBtn src={closeBtn} alt='close button' onClick={() => {console.log('close call'); setFullscreenImage(null)}}/>
                </div>
            ) : null}
        </ArticleContainer>
    )
}

export default Article