import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Loader from "./Loader/Loader"
import Header from "./Header/Header"
import { Container } from "../styles/container"

export const Layout = ()=>{
    return (
        <Container>
        <Header/>
        <Suspense fallback={<Loader/>}>
            <Outlet/>
        </Suspense>
        </Container>
    )
}