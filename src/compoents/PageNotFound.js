import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "../assets/css/PageNotFound.module.css"

export default function PageNotFound() {
    return (
        <section className={styles.page_404}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-md-12 text-center">
                            <div className={styles.four_zero_four_bg}>
                                <h1 className="text-center ">404</h1>
                            </div>
                            <div className="contant_box_404">
                                <h3 className="h2">
                                    Look like you're lost
                                </h3>
                                <p>the page you are looking for not avaible!</p>
                                <NavLink to="/" className="link_404">Go to Home</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
