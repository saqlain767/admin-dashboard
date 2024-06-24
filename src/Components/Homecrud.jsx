import React from "react"
import { Link } from "react-router-dom"
import style from "./home.module.css"
const Homecrud=()=>{
    return(
        <section id={style.nav}>
            <Link to="/">CREATE-USER</Link>
            <Link to="/users">USERS</Link>
        </section>
    )
}
export default Homecrud