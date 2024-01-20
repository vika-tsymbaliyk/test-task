import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"
import Loader from "./Loader/Loader"

export const Layout = ()=>{
    return (
        <>
        <header>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/catalog'>Catalog</NavLink>
                <NavLink to='/favorites'>Favorites</NavLink>
            </nav>
        </header>
        <Suspense fallback={<Loader/>}>
            <Outlet/>
        </Suspense>
        </>
    )
}