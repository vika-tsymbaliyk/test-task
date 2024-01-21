import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Loader from "./Loader/Loader"
import Header from "./Header/Header"
import { Container } from "../styles/container"
import { CenterDiv } from "../pages/pages.styled"

export const Layout = ()=>{
    return (
        <Container>
        <Header/>
        <Suspense fallback={<CenterDiv><Loader/></CenterDiv>}>
            <Outlet/>
        </Suspense>
        </Container>
    )
}