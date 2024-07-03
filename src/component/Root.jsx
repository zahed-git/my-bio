import { Outlet } from "react-router-dom";
// import Header from '../Header/Header'
// import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div >
            {/* <Header></Header> */}
            <div className="w-[1250px] mx-auto">
            <Outlet></Outlet>
             </div>
            {/* <Footer/> */}
            

        </div>
    );
};

export default Root;