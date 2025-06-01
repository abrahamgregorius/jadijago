import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Courses from "../components/WelcomePage/Courses";
import Carousel from "../components/WelcomePage/Carousel";

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Jumbotron></Jumbotron>
            <Courses></Courses>
            <Footer></Footer>
        </>
    )
}