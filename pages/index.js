import React , {useContext} from 'react';
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import ListingCard from "../components/ListingCard";
import Header from "../components/Header";
import {Context} from "../context";
import styled  from 'styled-components';


const Container = styled.div`
    width: 80%;
    max-width: 1170pt;
    margin: 0 auto;
    padding-top: 40pt;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10pt;
`
const Content = styled.div`
    grid-column: span 12;
    display: grid;

    @media(min-width: 600pt) {
        padding-left: 10pt;
        grid-column: span 9;
        grid-template-columns: repeat(auto-fit, minmax(263pt, 1fr));
        grid-column-gap: 10pt;
    }
`

export default function HomePage({products}) {
    const {filtering , sorting} = useContext(Context);

    const sort = () => {
        const sorted = sorting === "Low" ? products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)) : products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        return sorted;
    }

    const sortedProducts = sorting ? sort() : products ;

    return( 
        <>
            <Head> 
                <title>Women</title>
            </Head>

            <Header sorting={true}/>

            <Container>
                <Sidebar/>
                <Content>
                    {sortedProducts.map((product) => (
                        filtering 
                            ? product.badges.includes(filtering) 
                                ? <ListingCard key={product.id} product={product}></ListingCard> 
                                : ""
                            : <ListingCard key={product.id} product={product}></ListingCard>
                    ))}
                </Content>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://5fe4a5a24b7a60001722768b.mockapi.io/api/v1/products');
    const products = await res.json();

    return {
        props: {
            products,
        },
    }
}