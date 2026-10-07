"use client"
import React, { useEffect, useState } from 'react';
import CardProductList from '../components/CardProductList';
import style from  "../styleSheets/cardProduct.module.css";

const CardSection = () => {
  const [cardData , setCardData]= useState([]);
  useEffect(()=>{
    const dataFetchFromLocalStorage = localStorage.getItem('cardItem');
    if(dataFetchFromLocalStorage){
       setCardData(JSON.parse(dataFetchFromLocalStorage));
    }
  },[])
  return (
    <div className={style.cardDivSection}>
        <CardProductList cardProduct = {cardData}/>
    </div>
  )
}

export default CardSection

