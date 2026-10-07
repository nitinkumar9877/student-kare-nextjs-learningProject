import React from 'react'
import style from '../../../styleSheets/header.module.css'
import { IoSearchSharp } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";


const HeaderSection = () => {
    return (
        <div className={style.HeaderDiv}>
            <div className={style.HeaderImageDiv}>
                <img src="https://b2cdevelopment.studentkare.com:4009/assets/revamp-img/studentkare_logo_new.svg" alt="" height={58} width={150} />
            </div>
            <div className={style.headerSearchArea}>
                <div className={style.dropdownParent} >Self</div>
                <input type="text" placeholder='Search...' className={style.headerSearch} />
                <button className={style.searchButton}>
                    <IoSearchSharp className={style.searchIcon} />
                </button>
            </div>
            <div className={style.headerBtnArea}>
                <button className={style.supportBtn}>
                    Support
                    <BsQuestionCircle className={style.supportIcon} />
                </button>
                <Link
                    href="/cards"
                    className={style.cardBtn}
                >
                    Your cards
                    <CiShoppingCart className={style.cardIcon} />
                </Link>
                <button className={style.profileBtn}>
                    Register/Login
                </button>
            </div>
        </div>
    )
}

export default HeaderSection
