"use client"
import React, { use, useEffect, useState } from 'react';
import style from "../styleSheets/cardProduct.module.css"

const CardProductList = ({ cardProduct }) => {
  const [cardProductinsideFun, setcardProductinsideFun] = useState(cardProduct);

  useEffect(() => {
    setcardProductinsideFun(cardProduct);
  }, [cardProduct]);

  const removeCardItem = (index) => {
    const updatedData = cardProductinsideFun.filter((product, productIndex) => productIndex !== index)
    localStorage.setItem('cardItem', JSON.stringify(updatedData))
    setcardProductinsideFun(updatedData);
  };

  console.log("first inside fun : : ", { cardProduct });
  console.log("second inside fun : : ", { cardProductinsideFun })
  return (
    <div>
      {cardProductinsideFun.map((product, index) => (
        <div className={style.cardDiv} key={index + 1}>
          <p className={style.itemCount}>item : {index + 1}</p>
          <img className={style.cardImg} src={product.thumbnail} alt={product.title} />
          <div className={style.details}>
            <h3 className={style.cardTitle}>Title: {product.title}</h3>
            <p className={style.cardPrice}>Price : {product.price}</p>
            <p className={style.cardRating}>Rating : {product.rating}</p>
          </div>
          <button type='button' onClick={() => removeCardItem(index)} className={style.buttonForRemoveFormCard}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default CardProductList
