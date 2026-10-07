import React from 'react';
import style from '../styleSheets/bannerHome.module.css'
import Link from "next/link";
const BannerHome = () => {
    return (
        <section className={style.bannerHomeSection}>
            <h3 className={style.headingOfBannerHome}>Begin here for smarter <br />
                school supply solutions!</h3>
            <p className={style.paragraphOfBannerHome}>Everything your school needs in one place. Simplified <br />
                purchasing with order tracking and reliable delivery.</p>

            {/* <Link href="/products">
                <button className={style.exploreButtonBannerHome}>
                    Explore More
                </button>
            </Link> */}
            <Link
                href="/products"
                className={style.exploreButtonBannerHome}
            >
                Explore More
            </Link>
        </section>
    )
}

export default BannerHome
