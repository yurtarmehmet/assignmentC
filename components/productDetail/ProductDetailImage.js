import React, {useState} from 'react';
import styled from "styled-components";

const DetailImg = styled.div`
    padding-right: 15pt;
    width: 50%;
    min-width: 400pt;
    @media(max-width: 1000pt) {
        width: 100%;
        min-width: auto;
        max-width: 538pt;
        margin: 0 auto;
    }
`

const ImageList = styled.div`
    display: inline-block;
    float: left;
    width: 68pt;
    margin-right: 30pt;
    img {
        margin-bottom: 20pt;
        width: 68pt;
        height: 68pt;
        cursor: pointer;
    }
`

const ShowingImage = styled.div`
    display: inline-block;
    width: calc(100% - 98pt);
    img {
        width: 100%;
        height: 690pt;
    }
`

const ProductDetailImage = ({ imageUrl, productName }) => {
    const firstImg = imageUrl ? imageUrl : "https://dummyimage.com/351x520/616161/fff.jpg&text=PLACEHOLDER";
    const imageList = [firstImg , "https://dummyimage.com/101x101", "https://dummyimage.com/102x102", "https://dummyimage.com/103x103", "https://dummyimage.com/104x104"];
    const [currentImage, setCurrentImage] = useState(imageList[0])

    const changeCurrentImage = (image)=> {
        setCurrentImage(image);
    }

    return (
        <DetailImg>
            <ImageList>
                {imageList.map((image, index) => {
                    return <img key={index} src={image}  onClick={() => changeCurrentImage(image)}/>
                })}
            </ImageList>
            <ShowingImage><img src={currentImage} alt={productName}/></ShowingImage>
        </DetailImg>
    )
}

export default ProductDetailImage
