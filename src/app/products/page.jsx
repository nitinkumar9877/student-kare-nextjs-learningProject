import React from 'react'
import style from '../styleSheets/products.module.css'
import ProductList from '../components/ProductsList'
import FetchProductsPage from '../services/fetchDataFromApi'

const ProductsPage = async () => {
    const products = await FetchProductsPage();

    return (
        <section className={style.ProductPageSection}>
            <ProductList products={products} />
        </section>
    )
}

export default ProductsPage
