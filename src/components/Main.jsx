import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Main({children}) {
    return (
        <>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </>
    )
}