"use client"
import React, { useState } from 'react'
import style from '../styleSheets/products.module.css'

const ProductList = ({ products }) => {
    // const [isCard, setisCard] = useState(false);
    const [isAdd, setisAdd] = useState([]);

    const AddToCardFun = (productId) => {
        const localStorageData = localStorage.getItem('cardItem');
        // console.log(productId)
        const cardDataForLocalStorage = products.find((obj) => obj.id === productId);
        if (localStorageData !== null) {
            const data = JSON.parse(localStorageData);
            data.push(cardDataForLocalStorage);
            localStorage.setItem('cardItem', JSON.stringify(data));
        } else {
            localStorage.setItem('cardItem', JSON.stringify([cardDataForLocalStorage]));
        }
        setisAdd((previous) => [...previous, productId]);
    }
    const RemoveToCardFun = (productId) => {
        const localStorageData = localStorage.getItem('cardItem');
        if (localStorageData !== null) {
            const data = JSON.parse(localStorageData);
            const index = data.findIndex((obj) => obj.id === productId);
            if (index !== -1) {
                data.splice(index, 1);
                localStorage.setItem('cardItem', JSON.stringify(data));
            }
        }
        setisAdd((previous) => previous.filter((id) => id !== productId))

    }
    return (
        <div className={style.productsCardsParentDiv}>
            {products.map((product) => (
                <div className={style.productCard} key={product.id}>
                    <img className={style.imageClass} src={product.thumbnail} alt={product.title} />
                    <div className={style.productTitalAndRating}>
                        <h4 className={style.productName}>{product.title}</h4>
                        <p className={style.productReview}>{product.rating}</p>
                    </div>
                    <p className={style.productPrice}>Price: ₹{product.price}</p>
                    {isAdd.includes(product.id) ?
                        <div className={style.btnCard} onClick={() => RemoveToCardFun(product.id)} >
                            Remove From Card
                        </div> :
                        <div className={style.btnCard} onClick={() => AddToCardFun(product.id)} >
                            add to Card
                        </div>
                    }
                    {/* 
              {isAdd.includes(product.id) ?
                <button type='click' className='addToCardBtn' onClick={() => RemoveToCardFun(product.id)} > Remove from card</button>
                :
                <button type='click' className='addToCardBtn' onClick={() => AddToCardFun(product.id)} > Add to card</button>
              } */}
                </div>
            ))
            }
        </div >
    )
}

export default ProductList;