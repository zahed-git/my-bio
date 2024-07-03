import Nav from "./Nav";
import Footer from "./Footer";
import Banner from "./Banner";

const Home = () => {
    return (
        <div >
            <div className="flex justify-center">
                <Nav></Nav>
            </div>
            <div>
                <Banner></Banner>
            </div>

            <Footer></Footer>
        </div>
    )
}
export default Home