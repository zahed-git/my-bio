import { Outlet } from "react-router-dom";
import ParticaleBg from "./particleBG/ParticaleBg";



const Root = () => {
    
   
    return (
        <div className="flex">
            <div className="w-[1250px] mx-auto">
            <Outlet></Outlet>
             </div>
            <ParticaleBg  ></ParticaleBg>

        </div>
    );
};

export default Root;