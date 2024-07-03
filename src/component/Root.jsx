import { Outlet } from "react-router-dom";



const Root = () => {
    return (
        <div className="flex">
            <div className="w-[1250px] mx-auto">
            <Outlet></Outlet>
             </div>
            

        </div>
    );
};

export default Root;