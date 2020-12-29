import React from 'react';
import Head from "next/head";
import Header from "./../components/Header";
import BreadCrumb from './../components/BreadCrumb';
import MastheadBanner from './../components/MastheadBanner';
import ProductDetailImage from './../components/productDetail/ProductDetailImage';
import ProductDetailContent from './../components/productDetail/ProductDetailContent';
import styled from "styled-components";

const DetailContainer = styled.div`
    width: 80%;
    max-width: 1170pt;
    margin: 0 auto;
    display: flex;
    padding-top: 40pt;
    flex-wrap: wrap;
`

const ProductDetail = ({ productData }) => {
    const product = productData[0];

    return (
        <>
            <Head> 
                <title>{product.name}</title>
            </Head>

            <MastheadBanner/>
            <Header sorting={false}/>
            <BreadCrumb breadCrumbs= {[{name: "Women", url: "/"}, {name: product.name, url: `${product.name}-${product.id}`}]}/>

            <DetailContainer>
                <ProductDetailImage imageUrl={product.imageUrl} productName={product.name}/>
                <ProductDetailContent product={product}/>
            </DetailContainer>

        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://5fe4a5a24b7a60001722768b.mockapi.io/api/v1/products');
    const products = await res.json();

    const paths = products.map(product => {
        return {params: {name: `${product.name}-${product.id}`}}
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const id = params.name.split("-").slice(-1)[0];
    const res = await fetch(`https://5fe4a5a24b7a60001722768b.mockapi.io/api/v1/products?id=${id}`);
    const productData = await res.json()

    return {
      props: { productData },
    }
}

export default ProductDetail