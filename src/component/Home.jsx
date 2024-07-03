import Nav from "./Nav";
import Footer from "./Footer";
import Banner from "./Banner";
import Service from "./Service";
import MyRecent from "./MyRecent";

const Home = () => {
    return (
        <div >
            <div className="flex justify-center max-w-screen-xl">
                <Nav></Nav>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div className="my-24">
                <Service></Service>
            </div>
            <div className="my-24">
                <MyRecent></MyRecent>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Home