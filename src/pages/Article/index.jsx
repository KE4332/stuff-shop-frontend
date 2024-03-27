import styled from "styled-components"

import { useParams } from "react-router-dom"
import { articleList } from "../../Data/articles"
import { useState } from "react"

import closeBtn from "../../assets/closeBtn.png"
import prev_next_icon from "../../assets/prev_next_icon.png"

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
    border: 5px double rgba(0,0,0,0);

    &:hover {
        cursor: pointer;
        border-color: black;
    }
`

const ArrowButton = styled.img`
    position: relative;
    height: 8%;

    &:hover {
        cursor: pointer;
    }
`
ArrowButton.defaultProps = {
    src: prev_next_icon
}

const LeftButton = styled(ArrowButton)`
    left: 3%;
    transform: rotate(180deg);
`

const RightButton = styled(ArrowButton)`
    right: 3%;
`

const FSArrowButton = styled(ArrowButton)`
    position: absolute;
    height: 20%;
    bottom: 40%;
`

const FSRightButton = styled(FSArrowButton)`
    right: 0%;
`

const FSLeftButton = styled(FSArrowButton)`
    left: 0%;
    transform: rotate(180deg);
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
    border: 3px solid rgba(0,0,0,0);
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

const ImgWrapper2 = styled.div`
    height: 100%;
    width: 100%;
    background-color: #a5a5a5e0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0%;
    left: 0%;
`

const FullScreenImg = styled.img`
    max-width: 100%;
    max-height: 100%;
`

const CloseBtn = styled.img`
    height: 10%;
    position: absolute;
    top: 1%;
    right:1%;

    &:hover {
        cursor: pointer;
    }
`

function Article() {
    const { id } = useParams()
    const idNumber = parseInt(id)

    const article = articleList.find((article) => {return article.id === idNumber});

    const [currentIndex, setIndex] = useState(0)

    const [fullScreenImage, setFullscreenImage] = useState(false);

    const nb_images = article.images.length

    const setPrevIndex = () => setIndex((currentIndex + nb_images - 1) % nb_images)
    const setNextIndex = () => setIndex((currentIndex+1) % nb_images)

    return (
        <ArticleContainer>
            <ImageViewer>
                <ImgWrapper>
                    <LeftButton onClick={() => setPrevIndex()} />
                    <ImgInView src={article.images[currentIndex]} alt='Image in View'
                        onClick={() => {setFullscreenImage(true)}}
                    />
                    <RightButton onClick={() => setNextIndex()}/>
                </ImgWrapper>
                <ImageSelector>
                    {
                        article.images.map((image, index) => (
                            <ImgThumbail key={`${image}-${index}`} src={image} alt='thumbail'
                            style={currentIndex === index ? {borderColor: 'black'} : null}
                            onMouseEnter={() => {setIndex(index)}}
                            onClick={() => {setFullscreenImage(true)}}
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
                    <ImgWrapper2>
                        <FullScreenImg src={article.images[currentIndex]} alt="fullScreenImage"/>
                    </ImgWrapper2>
                    <FSLeftButton onClick={() => setPrevIndex()}/>
                    <FSRightButton onClick={() => setNextIndex()}/>
                    <CloseBtn src={closeBtn} alt='close button' onClick={() => setFullscreenImage(false)}/>
                </div>
            ) : null}
        </ArticleContainer>
    )
}

export default Article