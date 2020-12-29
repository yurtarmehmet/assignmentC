import React from 'react';
import Link from "next/link";
import styled from 'styled-components';

const Card = styled.a`
    display: block;
    cursor: pointer;
    height: 481pt;
    color: #32333a;
    position: relative;
`
const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 390pt;
`
const Name = styled.span`
    display: block;
    font-size: 16pt;
    margin-top: 12pt;
    line-height: 25pt;
`
const Price = styled.span`
    font-size: 14pt;
    line-height: 30pt;
`
const NewTag = styled.span`
    position: absolute;
    display: block;
    background: #ff5e08;
    width: 50pt;
    height: 20pt;
    top: 10pt;
    left: 10pt;
    color: #fff;
    text-align: center;
    line-height: 21pt;
    font-size: 12pt;
`

const ListingCard = ({product}) => {
    const isItNew = product.badges.includes("new");
    const imgUrl = product.imageUrl ? product.imageUrl : "https://dummyimage.com/351x520/616161/fff.jpg&text=PLACEHOLDER";
    return (
        // Product name tek kelime olmasaydı bu yapıda sorun yaşayacaktık. Bu durumda npm slug paketiyle veya kendi yazacağımız fonksiyonla product.name i boşluksuz (boşluk yerine tire(-)) bir hale getirerek sorunu çözebiliriz.
        <Link href="/[name]" as={`/${product.name}-${product.id}`}>
            <Card>
                {isItNew && <NewTag>NEW</NewTag>}
                <CardImg src={imgUrl} alt={product.name}/>
                <Name>{product.name}</Name>
                <Price>{`$${product.price.toFixed(2)}`}</Price>
            </Card>
        </Link>
    )
}

export default ListingCard
